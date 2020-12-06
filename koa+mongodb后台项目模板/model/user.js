const { mongo, Mongoose } = require('mongoose');
const { DB, Schema } = require('../lib/db');

const user = new Schema({
  userName: String,
  age: Number,
});

module.exports = DB.model('User', user);
