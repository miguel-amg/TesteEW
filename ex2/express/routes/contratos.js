var express = require('express');
var router = express.Router();

/////////////////////////////////////////////// ALTERAR /////////////////////////////////////////////////
var ControladorVar = require('../controllers/Controlador')
// var multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
// var fs = require('fs')
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* PAGINA INICIAL REMOVER EM PRINCIPIO */
router.get('/', function(req, res) {
    ControladorVar.list()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  });


// DADOS ID
router.get('/:id', function(req, res) {
    ControladorVar.findById(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

// INSERIR
router.post('/', function(req, res) {
  ControladorVar.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// ATUALIZAR
router.put('/:id', function(req, res) {
  ControladorVar.update(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// REMOVER
router.delete('/:id', function(req, res) {
    return ControladorVar.remove(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

// LISTAR POR ENTIDADE
router.get('/', function(req, res) {
  const entidade = req.query.entidade;
  ControladorVar.listByEntidade(entidade)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// LISTAR POR TIPO DE PROCEDIMENTO
router.get('/', function(req, res) {
  const tipoProcedimento = req.query.tipo;
  ControladorVar.listByTipoProcedimento(tipoProcedimento)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// LISTAR ENTIDADES
router.get('/entidades', function(req, res) {
  ControladorVar.listEntidades()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// LISTAR TIPOS DE PROCEDIMENTO
router.get('/tipos', function(req, res) {
  ControladorVar.listTiposProcedimento()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;
