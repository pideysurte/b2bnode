//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
  return await db.b2bUserApp.update({
             idMarketplace: body.idMarketplace, 
             name: body.name,
             password: body.password,
             email: body.email,
             phone: body.phone,
             token: body.token,
             img: body.img,
             token: body.token
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