'use strict';
require('dotenv').config();

require('mongoose').connect(process.env.MONGODB_URI);

const express = require('express');
const app = express();
app.use(express.static('static'));

const photosRouter = require('./routers/photos');
app.use('/photos', photosRouter);

app.get('/',(req,res)=>{
  res.sendFile('index.html');
});

app.list(process.env.PORT,()=>{
  console.log('http://localhost:'+ process.env.PORT);
});

