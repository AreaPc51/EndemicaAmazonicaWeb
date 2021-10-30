var express = require('express');
//solo pra vizulizar fragmentos
var visucontrol= require('../controladores/vi_frag');
var visu= new visucontrol();

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {title: 'Mi sitio Endemica',
      fragmentos: 'Principal/inicio'});

});

//Funcionalidades
router.get('/verAbout', visu.verAbout);
router.get('/verContact', visu.vercontact);
router.get('/verwork', visu.verwork);
router.get('/versingle', visu.versingle);

module.exports = router;
