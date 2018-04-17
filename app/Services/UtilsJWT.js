'use strict'
const Env = use('Env')
const jwt = require('jsonwebtoken')

class UtilsJWT {

  decodeJWT(token){
    try {
      return jwt.verify(token, Env.get('JWT_SECRET'));
    } catch (error) {
      return null
    }
  }
}
module.exports = UtilsJWT
