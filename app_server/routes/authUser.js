var express = require('express');
var router = express.Router();


// controladores
const Temperaturas = require('../models/temperaturasModel')
const Users = require('../models/usersModel')
const Blog = require('../controllers/blogController')
const UsersAuth = require('../controllers/usersAuthController')


// instancias de las clases de los diferentes controladores
const bc = new Blog();
const ac = new UsersAuth();

/* GET home page. */

// home
router.get('/', ac.Home);
// login
router.get('/login',ac.Login);
// validacion del login
router.post('/login-auth', ac.oneUser );
// new user
router.get('/newUser',ac.newUser);
// restablecer contraseña

router.get('/restore_password', ac.restoPassword);

router.post('/login-auth', ac.LoginAuth);


// temperaturas
router.get('/temperaturas', function(req, res, next) {
  Temperaturas.find((err,temperaturas)=>{
    if(err){

        res.status(400);
        res.json({success:false,msg:"No se pudo mostrar temperaturas"})
    }
    else{
        res.json(temperaturas)
    }
});
});








module.exports = router;
