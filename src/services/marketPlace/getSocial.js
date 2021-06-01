import db from '../../database/models/index';

const getSocial = async (body) => {
  return await db.b2bMarketPlace.findOne({
    where: {
      id: body.id
    },
    attributes: ['socialRef']
  }).then(data => {
     data.socialRef = JSON.parse(data.socialRef)
     return data 
    
    }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getSocial
}