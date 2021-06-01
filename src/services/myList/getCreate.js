import db from '../../database/models/index';


const getCreate = async (body) => {
  return await db.b2bMyList.create({
    idUserApp: body.idUserApp,
    idCedi: body.idCedi,
    idEstablecimiento: body.idEstablecimiento,
    idProduct: body.idProduct
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getCreate
}