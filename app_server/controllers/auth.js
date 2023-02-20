
const UsersAuth = require('../models/users-auth');
	errors = require('../middlewares/errors');



	
	module.exports.loginPost = function(req, res, next)
	{
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
	  };
	


