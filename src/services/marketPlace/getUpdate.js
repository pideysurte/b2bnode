//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
  return await db.b2bMarketPlace.update({
      typeMarketplace: body.typeMarketplace,
      idMarketplaceAso: body.idMarketplaceAso,
      typeSolution: body.typeSolution,
      ActMarketplaceAso: body.ActMarketplaceAso,
      name: body.name,
      nameClient: body.nameClient,
      img: body.img,
      phone: body.phone,
      typeDocument: body.typeDocument,
      numberDocument: body.numberDocument,
      address: body.address,
      note: body.note,
      status: body.status,
      versMarketplace: body.versMarketplace,
      textTyc: body.textTyc,
      textPd: body.textPd,
      socialRef: body.socialRef,
      faqs: body.faqs,
      textScreenCedi: body.textScreenCedi
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