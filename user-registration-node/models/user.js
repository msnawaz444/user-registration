var mongoose = require('mongoose');

//Creating Schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    status: Boolean
});
var User = mongoose.model('User', userSchema);


module.exports = {
    user: User
}