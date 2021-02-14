"use strict";
require('dotenv').config();
const clanInfo = require('./handlers/insertClanInfo.js');
const userInfo = require('./handlers/insertUserInfo.js');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_SERVER_IP, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((_) => console.log("Connected to DB"))
  .catch((err) => console.error("error", err));

  //Running every 24h
setInterval(function(){
    console.log("Logging to db")
    clanInfo();
    userInfo();
}, 1000 * 60 * 60 * 24);
