const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
  name:    { type: String, require: true },
  userName:    { type: String, require: true },
  email:   { type: String, require: true },
  password:    { type: String, require: true },
  edad:    { type: Number, require:true},
  rol:    { type: String, default: "user" },
  created: { type: Date, default: Date.now }
});






 const Users = module.exports = mongoose.model('Users',UsersSchema);

 module.exports.getAllUsers = function(callback){
  Users.find(callback);
 };

 module.exports.getUserById = function(id,callback){
  Users.findById(id,callback)
};

