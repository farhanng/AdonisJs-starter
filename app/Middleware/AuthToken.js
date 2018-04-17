/* this is sample auth */

'use strict'

const UtilsJWT = use('App/Services/UtilsJWT')

class AuthToken {
  async handle ({ request,response }, next) {
    const all = request.all()
    const headers = request.headers();

    var token = all.accessToken == null ? headers.accesstoken : all.accessToken;
    const usertoken = all.usertoken == null ? headers.usertoken : all.usertoken;

    if (usertoken) {
      token = usertoken;
    }
    
    var jwt = new UtilsJWT();
    var decodeToken = jwt.decodeJWT(token);
    if (decodeToken) {
      request.decodeToken = decodeToken;
      await next()
    }else{

      response.status(500).send({
        code : 500,
        message: "failed token"
      })
    }
  }
}

module.exports = AuthToken
