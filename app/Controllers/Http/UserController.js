'use strict'

const userService = use('App/Services/UserServices');
const User = use('App/Models/User');
const utilsJwt = use('App/Services/UtilsJWT');

class UserController {
    async register({ request, response }) {
        let body = request.only(['username','email','password','passwordConfirmation']);

        let missing = request.missingProperty(body,['username','email','password','passwordConfirmation']);
        if(missing) return response.sendError(null,'Field Must not be Empty !');

        let username = await userService.getFirst('username',body.username);
        if(username) return response.sendError(null,'Username Already Exist');

        let email = await userService.getFirst('email',body.email);
        if(email) return response.sendError(null,'Email Already Exist');

        if(body.password != body.passwordConfirmation) return response.sendError(null,'Password Confirmation not Match !');

        delete body.passwordConfirmation;

        let created = await userService.insert(body);

        return response.ok(created);
    }

    async login({ request, response }) {
        let body = request.only(['username','password']);

        let missing = request.missingProperty(body,['username','password']);
        if(missing) return response.sendError(null,'Field Must not be Empty !');

        let user = await userService.getFirst('username',body.username);
        if(!user) return response.sendError(null,'Username Not Registered !');

        if(!await User.comparePassword(body.password,user.password)) return response.sendError(null,'Password Invalid !'); 

        let userData = {
            id : user.id,
            username : user.username,
            password : user.password,
            email : user.email
        }

        let token = await utilsJwt.encodeJWT(userData);        

        userData.token = token;

        return response.ok(userData);
    }

    async getList({ response }) {
        let users = await userService.get();
        console.log(users);

        return response.ok(users);
    }
}

module.exports = UserController