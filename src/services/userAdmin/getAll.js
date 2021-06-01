import db from '../../database/models/index';
const getAll = async (params) => {
  console.log(params.query.idCedi)
  let userAmin
  if(params.query.idCedi !=="0"){
     userAmin =  await db.b2bUserAdmin.findAll()
    .then(data => {
      return data;
    }).catch(e => {
      console.log(e);
    });
  }else{
    userAmin =  await db.b2bUserAdmin.findAll({
      idCedi:params.query.idCedi
    })
    .then(data => {
      return data;
    }).catch(e => {
      console.log(e);
    });
  }



return userAmin                
}

module.exports = {
  getAll
}