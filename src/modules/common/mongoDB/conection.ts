import { MongoCliente, ObjectID } from 'mongodb';
const dbname = 'WebParaiso';
const url =
'mongodb+srv://kristalduran:kristalduran@webparaiso-fv9eu.mongodb.net/WebParaiso';
const mongoOptions = { useNewUrlParser : true };

const state = {
  db : null,
};

export const conect = (cb) => {
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

export const getPrimaryKey = (id) => {
  return ObjectID(id);
};

export const getDB: any = () => {
  return state.db;
};
