const mongoose = require('mongoose');


const UsersAuthSchema = new mongoose.Schema({
  email:    { type: String, require: true },
  password:    { type: String, require: true },
} ,{
  collection : 'users'
}) ;

 //module.exports =mongoose.model('UsersAuth',UsersAuthSchema);



 const UsersAuth = mongoose.model('UsersAuth',UsersAuthSchema);



 class   usersAuthModel {
  getOneUser (user, callback){
    UsersAuth.findOne({ email: user.email, password: user.password}).exec (callback);
                          };

  saveUser(user, callback){
    UsersAuth.save (user, err);

  }

};




module.exports = usersAuthModel ;


