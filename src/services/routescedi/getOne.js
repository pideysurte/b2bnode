import db from '../../database/models/index';

const getOne = async (body) => {
  let routes = await db.b2bRoutescedi.findOne({
    where: {
      id: body.id
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });

    let data
    let dias = JSON.parse(routes.dataValues.attentionDaysRoutes)
    return data = {
      "id": routes.dataValues.id,
      "name": routes.dataValues.name,
      "idCedi": routes.dataValues.idCedi,
      "attentionDaysRoutes": dias,
      "textPr": routes.dataValues.textPr
    }


}

module.exports = {
  getOne
}