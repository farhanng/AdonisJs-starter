'use strict'

const userService = use('App/Services/UserServices');

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

    if(!token) return response.sendError(null,'Missing Token !');

    try {
      var decodeToken = await UtilsJWT.decodeJWT(token);
    } catch(err) {
      return response.sendError(null,'Invalid Token !');
    }

    if (decodeToken) {
      if(!decodeToken.username || !decodeToken.password) return response.sendError(null,'Invalid Token !');

      let user = await userService.getFirst('username',decodeToken.username);      

      if(!user) return response.sendError(null,'Invalid Token !');
      if(decodeToken.password != user.password) return response.sendError(null,'Invalid Token !');

      request.user = decodeToken;
      delete request.user.password;
      await next()

    } else {
      return response.sendError(null,'Invalid Token !');
    }
  }
}

module.exports = AuthToken
