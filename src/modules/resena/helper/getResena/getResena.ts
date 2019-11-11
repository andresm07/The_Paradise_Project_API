/**
 * Filename: deleteEvent.helper.ts
 * Author:
 * Date: 05/10/2019
 * Description: Get Reseña helper Function
 */
import { clientConnect } from './../../../common/mongoDB/conection';
const NOSOTROS = 'Nosotros';

const getReseña = async () => {
  try {
    return new Promise((resolve, reject) => {
      clientConnect().then((client: any) => {
        const data = client.db('WebParaiso');
        const col = data.collection(NOSOTROS);
        col.find({}).toArray((err, items) => {
          if (err) {
            reject(err);
          }
          resolve({ info: items[0].resena });
        });
      })
      .catch((err) => {
        reject(err);
      });
    });
  } catch (error) {
    throw([error, 400]);
  }
};

export default getReseña;
