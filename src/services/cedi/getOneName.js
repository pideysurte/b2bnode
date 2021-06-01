import db from '../../database/models/index';

const getOneName = async (name) => {
  return await db.b2bCedi.findOne({
    raw: true,
    where: {
        username : name
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
  getOneName
}


