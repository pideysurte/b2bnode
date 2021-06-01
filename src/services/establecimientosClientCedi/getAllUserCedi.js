import db from '../../database/models/index';

const getAllUserCedi = async (body) => {
  return await db.b2bEstablecimientosClientCedi.findAll({
    raw:true,
    where: {
      emailUser: body.emailUser,
      idCedi: body.idCedi,
      status: 1
    },
    include: [{
      model: db.b2bRoutescedi,
      as: 'b2bRoutescedi',
      attributes: ['id', 'name', 'idCedi', 'attentionDaysRoutes', 'textPr']
    }]
  }).then(data => { 
    data.forEach(element => element['b2bRoutescedi.attentionDaysRoutes'] = JSON.parse(element['b2bRoutescedi.attentionDaysRoutes']));
     return data
     }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAllUserCedi
}