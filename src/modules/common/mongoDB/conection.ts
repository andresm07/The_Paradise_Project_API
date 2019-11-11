import { MongoClient, objectID } from 'mongodb';

const url =
'mongodb+srv://kristalduran:kristalduran@webparaiso-fv9eu.mongodb.net/WebParaiso';
const mongoOptions = { useNewUrlParser : true };
const state = {
  db : null,
};

export const clientConnect = async () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, mongoOptions, (err, client) => {
      if (err) {
        reject(err);
      }
      resolve(client);
    });
  });
};

export const getDB = () => {
  return state.db;
};
