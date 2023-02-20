var express = require('express');
var router = express.Router();
const Admin = require('../controllers/adminController')

adc= new Admin();


/* GET users listing. */
router.get('/admin', adc.AllUsers);
// user
router.get('/users', adc.AllUsers);

module.exports = router;
