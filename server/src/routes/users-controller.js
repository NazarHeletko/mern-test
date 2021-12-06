const HttpError = require('../error/http-error')
const User = require('../models/User.model')



async function getUsersController (req, res, next) {
    try{
        const allUsers =await User.find()
        res.status(200).json(allUsers)
    }
    catch(err){
        return next(new HttpError('При запиті користувачів, щось пішло не так', 500))
    }
}

async function deleteUserController (req, res, next) {
    try {
        await User.deleteOne({_id: req.body.id})
        res.status(200).json({success: 1})
    }
    catch(err){
        return next(new HttpError('Не вдалося видалити користувача', 500))
    }
}

async function createUserController (req, res, next) {
    try {
        const user = {
            name: req.body.name,
            created: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            group: req.body.group
        }
        console.log(user)
        const newUser = new User(user)
        await newUser.save()
        res.status(200).json({success: 1})
    }
    catch(err){
        return next(new HttpError('Не вдалося видалити користувача', 500))
    }
}

async function updateUserController (req, res, next) {
    try{
        let id = req.body.id
        let name = req.body.name
        let group = req.body.group
        await User.findByIdAndUpdate(id, {name, group})
        res.status(200).json('user updeted')
    }
    catch (err) {
        return next(new HttpError('Не вдалося оновити користувача', 500))
    }
}


module.exports = {getUsersController, deleteUserController, updateUserController, createUserController}