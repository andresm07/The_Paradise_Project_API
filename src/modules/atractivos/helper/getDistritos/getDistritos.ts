/**
 * Filename: deleteEvent.helper.ts
 * Author:
 * Date: 05/10/2019
 * Description: Get Rooms helper Function
 */

import { clientConnect } from './../../../common/mongoDB/conection';
const DISTRITOS = 'Distritos';

/**
 * Access to google api to get all rooms
 * @param auth The auth data for access to google api
 */
const getDistritos = async () => {
  return new Promise((resolve, reject) => {
    clientConnect().then((client: any) => {
      const data = client.db('WebParaiso');
      const col = data.collection(DISTRITOS);
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

export default getDistritos;
