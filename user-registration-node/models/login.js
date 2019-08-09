var mongoose = require('mongoose');

//Creating Schema
var Schema = mongoose.Schema;
 var LoginSchema = new Schema({
    userName: String,
    password: String
 });
 module.exports=mongoose.model('Login', LoginSchema);