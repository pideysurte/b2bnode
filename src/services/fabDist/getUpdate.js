//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
  console.log(body)
  return await db.b2bFabDist.update(body, {
    where : {
      id: body.id
    }
    }).then(data => {
         return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getUpdate
}