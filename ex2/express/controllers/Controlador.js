const express = require('express');
const router = express.Router();



///////////////////////////////////////////// Nome do modelo //////////////////////////////////////////////
const Contrato = require('../models/Modelo');
///////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////// PEDIDOS A SER REALIZADOS //////////////////////////////////////////

// Encontrar tudo e ordenar sort
module.exports.list = () => {
  return Contrato
      .find()
      .sort({id : 1})
      .exec()
}

// Encontrar atráves do id (SE NAO HOUVER ID O MONGO CRIA AUTOMATICO _id)
module.exports.findById = id => {
  return Contrato
      .findOne({id : id})
      .exec()
}

// Inserir no mongo
module.exports.insert = cont => {
  if((Contrato.find({id : cont._id}).exec()).length != 1){
      var newContrato = new Contrato(cont)
      return newContrato.save()
  }
}

// Atualizar no mongo
module.exports.update = (id, uc) => {
  return Contrato
      .findByIdAndUpdate(id, uc, {new : true})
}

// Remover no mongo
module.exports.remove = id => {
  return Contrato
      .findOneAndDelete({id : id})
}

// Encontrar contratos por entidade comunicante
module.exports.listByEntidade = (entidade) => {
  const query = {};
  if (entidade) {
    query.entidade_comunicante = entidade;
  }
  return Contrato
    .find(query)
    .sort({ id: 1 })
    .exec();
}

// Encontrar contratos por tipo de procedimento
module.exports.listByTipoProcedimento = (tipo) => {
  const query = { tipoprocedimento: tipo };
  return Contrato
    .find(query)
    .exec();
}

// Encontrar e ordenar entidades comunicantes sem repetições
module.exports.listEntidades = () => {
  return Contrato
    .distinct('entidade_comunicante')
    .collation({ locale: 'pt', strength: 1 }) // Garante a ordenação alfabética, considerando letras maiúsculas e minúsculas
    .exec();
}

// Encontrar e ordenar tipos de procedimento sem repetições
module.exports.listTiposProcedimento = () => {
  return Contrato
    .distinct('tipoprocedimento')
    .collation({ locale: 'pt', strength: 1 }) // Garante a ordenação alfabética, considerando letras maiúsculas e minúsculas
    .exec();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////