const userAModel = require('../models/usersModel'),

uAc = new userAModel ();

class adminController {
  // esta muestra todos los usuarios

  AllUsers (req, res, next){
      uAc.getAllUser ((err, users)=>{
        if (err){
          res.send(err);
        }
        else
        {
          res.render('admin', {title: 'Usuarios Registrados', data:users});

        }

      })
  }


}





module.exports= adminController ;
