const express = require('express')
const mongoose = require('mongoose')
const { router } = require('./api/routes')
require('dotenv').config()
const app = express()
const PORT = 3000
const dbURI = 'mongodb+srv://test:test1234@cluster0.vnpghy9.mongodb.net/songsApi?retryWrites=true&w=majority';
mongoose.connect(dbURI).then(app.listen(PORT,()=>{console.log("DB conected and Listening On Port 3000.")})).catch((err)=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)
