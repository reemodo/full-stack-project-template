const User = require('../models/user')

class userCollManager{
    static async getUsers(){
        const users = await User.find({})
        return users 
    }
    static async findUserById(id){
        const user = await User.findById(id)
        return user
    }
    static async getUserUniversity(userId){
        const user = await User.findById(userId)
        return user.universityName
    }
    static async getUserUniversityAndGender(userId){
        const user = await User.findById(userId)
        return {universityName : user.universityName,gender : user.gender}
    }
    static async saveUser(user){
        const newUser = new User(user)
        await newUser.save()
        return newUser
    }



}

module.exports = userCollManager