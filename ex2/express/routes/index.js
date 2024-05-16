var express = require('express');
var router = express.Router();

/////////////////////////////////////////////// ALTERAR /////////////////////////////////////////////////
// var ControladorVar = require('../controllers/Controlador')
// var multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
// var fs = require('fs')
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* PAGINA INICIAL REMOVER EM PRINCIPIO */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
