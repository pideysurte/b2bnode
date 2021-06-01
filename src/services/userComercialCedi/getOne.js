import db from '../../database/models/index';

const getOne = async (body) => {
  return await db.b2bUserComercialCedi.findOne({
    where: {
      id : body.id
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}