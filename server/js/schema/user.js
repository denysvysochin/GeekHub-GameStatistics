var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    password: String
});

export {userSchema};