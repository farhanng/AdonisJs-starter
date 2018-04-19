'use strict'

class HomeController {
    secretPage({ request, response }) {
        response.ok(request.user, 'Wellcome to secret page !');
    }
}

module.exports = HomeController
