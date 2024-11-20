const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://crud:1213geR@@cluster0.ew0l3eb.mongodb.net/")

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log('Server is Running')
})