/**
 * Filename: getEvents.helper.ts
 * Description: GetEvents helper Function
 */

import { clientConnect } from './../../../common/mongoDB/conection';
const CALENDARIO = 'Calendario';

const getEventos = async () => {
  return new Promise((resolve, reject) => {
    clientConnect().then((client: any) => {
      const data = client.db('WebParaiso');
      const col = data.collection(CALENDARIO);
      col.find({}).toArray((err, items) => {
        if (err) {
          reject(err);
        }
        resolve(items);
      });
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export default getEventos;
