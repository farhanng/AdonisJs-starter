'use strict'
const Env = use('Env')
const jwt = require('jsonwebtoken')

class UtilsJWT {

  static async encodeJWT(data) {
    return await jwt.sign(data, Env.get('JWT_SECRET','supersecret'));
  }

  static decodeJWT(token){
    return new Promise((resolve,reject) => {
      try {
        return resolve(jwt.verify(token, Env.get('JWT_SECRET','supersecret')));
      } catch (error) {
        return reject(error);
      }
    })  
  }
  
}
module.exports = UtilsJWT
