const mongoose = require('mongoose');
const User = require('./usermodel.js');
// import Message from './message';
const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/user");
};

module.exports= { connectDb, User};