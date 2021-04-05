import db from '../../database/models/index';


const getCreate = async (body) => {
  return await db.b2bListPricesCustom.create({
    idCedi:body.idCedi,
    idFabDist : body.idFabDist,
    name : body.name,
    status: body.status
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getCreate
}