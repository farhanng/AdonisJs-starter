'use strict'

class RequestHelper {
  async handle ({ request }, next) {
    // call next to advance the request

    request.missingProperty = (object, property) => {
      if(Array.isArray(property)) {
        for(let i=0; i < property.length;i++) {
          if(!object[property[i]]) {
            return property[i];
            break;
          }
        }
        return false;
      } else {
        if(!object[property]) {
          return property;
        }
        return false;
      }
    }

    await next()
  }
}

module.exports = RequestHelper
