const mongoose = require('mongoose');


const UsersAuthSchema = new mongoose.Schema({
  email:    { type: String, require: true },
  password:    { type: String, require: true },
} ,{
  collection : 'users'
}) ;

 //module.exports =mongoose.model('UsersAuth',UsersAuthSchema);



 const UsersAuth = module.exports = mongoose.model('UsersAuth',UsersAuthSchema);

  module.exports.getOneUser = function(user, callback){
    UsersAuth.findOne(user, callback);
  };




