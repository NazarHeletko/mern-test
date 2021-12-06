const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./src/routes/users-router')
const groupsRouter = require('./src/routes/groups-router')
const path = require('path');
let cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join('public')))

app.use('/api/users', usersRouter)
app.use('/api/groups', groupsRouter)

app.use((req, res, next) =>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


async function start() {
    await mongoose.connect('mongodb+srv://nazar:nazar@cluster0.llamq.mongodb.net/mern?retryWrites=true&w=majority')
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    })
}

start()