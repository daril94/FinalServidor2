const mongoose = require('mongoose');


const BlogSchema = new mongoose.Schema({
  namePost:  { type: String, require: true },
  userPost:    { type: String, require: true },
  created: { type: Date, default: Date.now  },
  mesCreated: {type: Date, default: Date.now},
  imageUrl: { type: String, require: true },
  descriptionPostMini: { type: String, require: true },
  descriptionPost: { type: String, require: true },
  tags: [String],


} ,{
  collection : 'blog'
}) ;

 //module.exports =mongoose.model('UsersAuth',UsersAuthSchema);



 const Blog = module.exports = mongoose.model('Blog',BlogSchema);

  module.exports.gelAllPost = function( callback){
    Blog.findOne( callback);
  };

