//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
  return await db.b2bMyList.update({
        idUserApp: body.idUserApp,
        idCedi: body.idCedi,
        idEstablecimiento: body.idEstablecimiento,
        idProduct: body.idProduct
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