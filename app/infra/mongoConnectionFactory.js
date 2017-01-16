var mongo = require('mongoose');

/**
* Retorna uma conexão com o MongoDb
* @return {[type]} [object]
*/
var connectMongo = function(){

  /**
  * Ambiente de Produção da Aplicação
  */
  if(!process.env.NODE_ENV)  {
    var url = 'mongodb://gdg:gdg2016@ds147377.mlab.com:47377/api';
  } else {
    var url = 'mongodb://mongo:2700/api';
  }

  return mongo.connect(url)

};

module.exports = function(){
  return connectMongo;
}
