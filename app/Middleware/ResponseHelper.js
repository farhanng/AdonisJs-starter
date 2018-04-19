'use strict'

class ResponseHelper {
  async handle ({ request, response }, next) {
    // call next to advance the request

    response.ok = (data, message, code) => {
      let result = {
        code : 200,
        message : 'OK'
      }
      if (data) result.data = data;
      if (message) result.message = message;
      if (code) result.code = code;

      console.log(data,result);

      return response.status(result.code).send(result);
    }

    response.sendError = (data, message, code) => {
      let result = {
        code : 400,
        message : 'Bad Request'
      }
      if (data) result.data = data;
      if (message) result.message = message;
      if (code) result.code = code;

      return response.status(result.code).send(result);
    }

    await next()
  }
}

module.exports = ResponseHelper
