import db from '../../database/models/index';

const unique = async (email) => {
 
  return await db.b2bUserAdmin.findOne({
    where: {
      email
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  unique
}