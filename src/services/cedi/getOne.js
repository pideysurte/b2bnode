import db from '../../database/models/index';

const getOne = async (id) => {
  return await db.b2bCedi.findOne({
    raw: true,
    where: {
      id : id
    }
  }).then(data => {
     if (data.socialRef){
        data.socialRef = JSON.parse(data.socialRef)
     }     
     return data
    
    }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}