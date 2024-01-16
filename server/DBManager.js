const mongoose = require('mongoose')
const fs = require("fs")
const User = require('./models/user')
const University = require('./models/university')
const Activity = require('./models/activity')
const activities = require("../activity.json")
const universities =require("../university.json")
const users = require("../user.json")

class DBManager{
    static connectToDB(){
        mongoose.connect('mongodb://localhost/Amani-DB', { useNewUrlParser: true })
    }
    static async generateData(){
        universities.forEach(async uni => {
            const newUniversity = new University(uni)
            await newUniversity.save()
        })
        activities.forEach(async activity => {
            const newActivity = new Activity(activity)
            await newActivity.save()
        })
        users.forEach(async user => {
            const newUser = new User(user)
            await newUser.save()
        })
    }
    static async reGenerate(){
        await User.deleteMany({})
        await Activity.deleteMany({})
        await University.deleteMany({})
        DBManager.generateData()
    }
}
module.exports = DBManager