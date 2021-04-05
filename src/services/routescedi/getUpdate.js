//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
  return await db.b2bRoutescedi.update({
      idCedi: body.idCedi,
      name: body.name,
      attentionDaysRoutes: body.attentionDaysRoutes,
      textPr: body.textPr
     }, {
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