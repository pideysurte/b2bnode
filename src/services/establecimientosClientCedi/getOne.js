import db from '../../database/models/index';

const getOne = async (body) => {

  return await db.b2bEstablecimientosClientCedi.findOne({
    where: {
      id : body.id
    },
    include: [
      {
      model: db.b2bRoutescedi,
      as: 'b2bRoutescedi'
    }, {
      model: db.b2bUserComercialCedi,
      as: 'b2bUserComercialCedi'
    }, {
      model: db.b2bTypeShipping,
      as: 'b2bTypeShipping'
    }, {
      model: db.b2bTypeTaxes,
      as: 'b2bTypeTaxes'
    }
  ]
  }).then(data => {
        if (data.b2bRoutescedi.attentionDaysRoutes){
          data.b2bRoutescedi.attentionDaysRoutes = JSON.parse(data.b2bRoutescedi.attentionDaysRoutes)
        }    
        return data
     }).catch(e => {
        console.log(e);
     });
}

module.exports = {
  getOne
}