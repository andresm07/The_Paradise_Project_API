/**
 * Filename: deleteEvent.helper.ts
 * Author: 
 * Date: 04/10/2019
 * Description: Get Calendario helper Function
 */


/**
 * Access to google api to get all rooms
 */

 import { getDB } from './../../../common/mongoDB/conection'
 const Calendario = "Calendario";

const getEventos = async () => {
  try {
    // aca hace el llamado del db
    await getDB().collection(Calendario).find({}).toArray((err,documents)=>{
      if(err){
          console.log(err);
      }else{
          //res.json(documents);
      }
  });
    return [];
  } catch(err) {
    throw([err, 400]); //TODO
  }
};


export default getEventos;

