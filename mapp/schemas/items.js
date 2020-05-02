const mongoose = require("mongoose");
const DatabaseConfig = require(__path_configs + "database");

var schema = new mongoose.Schema({
  name: "string",
  Key: "String",
  Location: "String",
  status: "string",
  odering: "string",
});

module.exports = mongoose.model(`${DatabaseConfig.col_items}`, schema);
