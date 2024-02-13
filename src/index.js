const express = require('express')
const cors = require('cors');

const mongoose = require('mongoose')
const { router } = require('./api/routes')
require('dotenv').config()
const app = express()
const PORT = 3000
const dbURI = 'mongodb+srv://test:test1234@cluster0.vnpghy9.mongodb.net/songsApi?retryWrites=true&w=majority';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
origin: '*',  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

app.use(cors(corsOptions),router)
mongoose.connect(dbURI).then(app.listen(PORT,()=>{console.log("DB conected and Listening On Port 3000.")})).catch((err)=>console.log(err));
