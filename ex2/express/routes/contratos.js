var express = require('express');
var router = express.Router();

/////////////////////////////////////////////// ALTERAR /////////////////////////////////////////////////
var ControladorVar = require('../controllers/Controlador')
// var multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
// var fs = require('fs')
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rota para obter todos os contratos, contratos por entidade ou por tipo de procedimento
router.get('/', function(req, res) {
  // Extrair os parâmetros de consulta "entidade" e "tipo" da solicitação
  const entidade = req.query.entidade;
  const tipo = req.query.tipo;

  // Verificar se o parâmetro de consulta "entidade" está presente
  if (entidade) {
      // Se o parâmetro de consulta "entidade" estiver presente, buscar os contratos correspondentes
      ControladorVar.listByEntidade(entidade)
          .then(data => res.json(data))
          .catch(error => res.status(500).json({ error: 'Ocorreu um erro ao buscar os contratos.', details: error }));
  } else if (tipo) {
      // Se o parâmetro de consulta "tipo" estiver presente, buscar os contratos correspondentes
      ControladorVar.listByTipoProcedimento(tipo)
          .then(data => res.json(data))
          .catch(error => res.status(500).json({ error: 'Ocorreu um erro ao buscar os contratos.', details: error }));
  } else {
      // Se nenhum parâmetro de consulta estiver presente, listar todos os contratos
      ControladorVar.list()
          .then(data => res.json(data))
          .catch(erro => res.status(500).json({ error: erro.message }));
  }
});



// Inserir novo contrato
router.post('/', function(req, res) {
  // Obter todos os contratos existentes para determinar o ID máximo atual
  ControladorVar.list()
      .then(existingContracts => {
          // Encontrar o ID máximo atual
          const maxId = existingContracts.reduce((max, contract) => Math.max(max, contract.id || 0), 0);
          
          // Determinar o próximo ID a ser atribuído
          const nextId = maxId + 1;

          // Adicionar o próximo ID ao corpo da solicitação, se não houver um ID fornecido
          if (!req.body.id) {
              req.body.id = nextId;
          }

          // Inserir o contrato no banco de dados
          ControladorVar.insert(req.body)
              .then(data => res.json(data))
              .catch(error => res.status(500).json({ error: 'Ocorreu um erro ao inserir o contrato.', details: error }));
      })
      .catch(error => res.status(500).json({ error: 'Ocorreu um erro ao obter os contratos existentes.', details: error }));
});

// Listar entidades comunicantes
router.get('/entidades', function(req, res) {
  ControladorVar.listEntidades()
      .then(data => res.json(data))
      .catch(erro => res.status(500).json({ error: erro.message }));
});

// Listar tipos de procedimento
router.get('/tipos', function(req, res) {
  ControladorVar.listTiposProcedimento()
      .then(data => res.json(data))
      .catch(erro => res.status(500).json({ error: erro.message }));
});

// Encontrar contrato por ID
router.get('/:id', function(req, res) {
  ControladorVar.findById(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

// Remover contrato
router.delete('/:id', function(req, res) {
  ControladorVar.remove(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

// Atualizar contrato
router.put('/:id', function(req, res) {
  const id = req.params.id; // Extrai o id dos parâmetros da solicitação
  const newData = req.body;
  
  // Remova o _id do newData, se existir
  delete newData._id;

  ControladorVar.update(id, newData)
      .then(data => res.json(data))
      .catch(erro => res.status(500).json({ error: erro.message }));
});

module.exports = router;
