const HttpError = require('../error/http-error')
const Group = require('../models/Group.model')
const User = require('../models/User.model')


async function updateRolesController (req, res, next) {
    try{
        let _id = req.body._id
        let name = req.body.name
        let description = req.body.description
        const respoonse = await  Group.findByIdAndUpdate(_id, {name, description, _id})
        res.status(200).json(respoonse)
    }
    catch(err){
        return next(new HttpError('Щось пішло не так', 500))
    }
}

async function addRolesController (req, res, next) {
    try{
        const newRole =  new Group({
            name: req.body.name,
            description: req.body.description
        })
        await newRole.save()
        res.status(201).json(newRole)
    }
    catch(err){
        return next(new HttpError('Щось пішло не так', 500))
    }
}

async function getRolesController (req, res, next) {
    try{
        const allRoles =await Group.find()
        res.status(200).json(allRoles)
    }
    catch(err){
        return next(new HttpError('При запиті користувачів, щось пішло не так', 500))
    }
}

async function deleteRolesController (req, res, next) {
    try{
        const ifUserExist =await User.findOne({group: req.body.name})
        if(ifUserExist){
            res.status(404).json({message: 'There are users with this role!'})
            return
        }

        await Group.deleteOne({_id: req.body._id})
        res.status(200).json({message: "User was delated"})
    }
    catch(err){
        return next(new HttpError('При запиті користувачів, щось пішло не так', 500))
    }
}


module.exports = {getRolesController, deleteRolesController, addRolesController, updateRolesController}