var express = require('express');
var router = express.Router();
const Temperaturas = require('../models/temperaturas')
const Users = require('../models/users')
const UsersAuth = require('../controllers/auth')
const Blog = require('../models/blog')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Arduino Server 2', user:'null'});
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Arduino Login'});
});


router.get('/blog', function(req, res, next) {
  Blog.gelAllPost((err, docs)=>{
    if(err){
      res.status(400);
      res.json({success:false,msg:"No hay datos"})
  }
  else{
    res.render('blog', { title: 'Blog', blogs:docs});
    console.log( docs);

  }

  })

  res.render('blog', { title: 'Blog Arduino'});


});



router.get('/newUser', function(req, res, next) {
  res.render('newUser', { title: 'Arduino newUser'});
});
router.get('/restore_password', function(req, res, next) {
  res.render('restore_password', { title: 'Arduino restore_password'});
});



router.get('/a', function(req, res, next) {

  res.render('a', { title: 'Arduino restore_password'});
});



router.post('/newUser', function(req, res, next) {

  var users = new Users ({
    name:req.body.Name,
    userName: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
    edad:req.body.edad,
  });


  users.save ((err, users)=>{
    if(err){
        res.status(400);
        res.json({success:false,msg:"No se pudo guardar los datos"})
    }
    else{
      res.send("tenemos tus datos");
      console.log( users);

    }
});




});


router.get('/temperaturas', function(req, res, next) {
  Temperaturas.find((err,temperaturas)=>{
    if(err){

        res.status(400);
        res.json({success:false,msg:"No se pudo extraer los datos"})
    }
    else{
        res.json(temperaturas)
    }
});
});




router.get('/users', UsersAuth.loginPost);




router.post('/login-auth', function(req, res, next) {
   let user = {email:req.body.Email, password:req.body.Password};

  UsersAuth.getOneUser(user, (err,docs)=>{
    if(err){
        res.status(400);
        res.json({success:false,msg:"No se pudo extraer los datos"})
    }
    else{
      if (docs != null)
      {

        res.json(docs)
      }
      else res.send("nope");
       }
       console.log("busco" + user.email +  " y " + user.password)
       });
});







router.get('/:userId',(req,res,next)=>{

      let userId = req.params.userId;
      Users.getUserById(userId,(err,users)=>{
          if(err){
              res.status(400);
              res.json({success:false,msg:"No se pudo extraer los datos"})
          }
          else{
              res.json(users)
          }
      });

  })



module.exports = router;
