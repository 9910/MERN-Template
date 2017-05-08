var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
   username: {type: String, default: ''},
   password: {type: String},
   email: {type: String}
});

module.exports = mongoose.model('UserSchema', UserSchema);
