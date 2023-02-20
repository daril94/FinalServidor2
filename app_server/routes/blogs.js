var express = require('express');
var router = express.Router();
const Blog = require('../controllers/blogController')
const bc = new Blog();

// post blog
router.get('/blog', bc.AllPost);
// inserar post
router.get('/insertarPost', bc.insertarPost);
// nuevo post
router.get('/newPost', bc.newPost);


module.exports = router;
