const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

// Connect to MongoDB

mongoose
  .connect('mongodb+srv://crud:1213geR%40@cluster0.ew0l3eb.mongodb.net/myDatabase?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log('Server is Running')
})