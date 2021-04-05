import db from '../../database/models/index';


const getCreate = async (body) => {
  return await db.b2bRoutescedi.create({
    idCedi: body.idCedi,
    name: body.name,
    attentionDaysRoutes: body.attentionDaysRoutes,
    textPr: body.textPr
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getCreate
}