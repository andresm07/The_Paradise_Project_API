import { MongoCliente, ObjectID } from 'mongodb';
const dbname = 'WebParaiso';
const url =
'mongodb+srv://kristalduran:kristalduran@webparaiso-fv9eu.mongodb.net/WebParaiso';
const mongoOptions = { useNewUrlParser : true };

const state = {
  db : null,
};

const conect = (cb) => {
  if (state.db) {
    cb();
  } else {
    MongoCliente.connect(url, mongoOptions, (err, cliente) => {
      if (err) {
        cb(err);
      } else {
        state.db = cliente.db(dbname);
        cb();
      }
    });
  }
};

const getPrimaryKey = (id) => {
  return ObjectID(id);
};

const getDB = () => {
  return state.db;
};

module.exports = {
  conect,
  getDB,
  getPrimaryKey,
};
