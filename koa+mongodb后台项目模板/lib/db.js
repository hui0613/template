const mongoose = require('mongoose');
const { DB_Config } = require('../config');
const Schema = mongoose.Schema;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
  `mongodb://${DB_Config.url}:${DB_Config.port}/${DB_Config.dbName}`
);

const DB = mongoose.connection;

module.exports = {
  DB,
  Schema,
};
