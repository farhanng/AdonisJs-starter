const User = use('App/Models/User');

class UserServices {
    static async insert(data) {
        let user = new User();
        user.fill(data);
        
        let inserted = await user.save();
        
        return user;
    }

    static async get(whereColumn, value) {
        let option = {};
        if(whereColumn && value) option[whereColumn] = value;

        return await User.query().where(option);
    }

    static async getFirst(whereColumn, value) {
        let option = {};
        if(whereColumn && value) option[whereColumn] = value;

        return await User.query().where(option).first();
    }
}

module.exports = UserServices;