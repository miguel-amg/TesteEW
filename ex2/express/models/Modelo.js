var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
  idcontrato: Number,
  nAnuncio: String,
  tipoprocedimento: String,
  objectoContrato: String,
  dataPublicacao: String,
  dataCelebracaoContrato: String,
  precoContratual: String,
  prazoExecucao: Number,
  NIPC_entidade_comunicante: Number,
  entidade_comunicante: String,
  fundamentacao: String,
  id: Number
});

module.exports = mongoose.model('Contrato', esquema, 'contratos');
// module.exports = mongoose.model('NOME_DO_MODELO', ALTERAR_NOME_SCHEMA, 'NOME_COLECAO_MONGO');