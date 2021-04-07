import db from '../../database/models/index';


const getCreate = async (body) => {
  return await db.b2bTypeDocument.create({
    name: body.name
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getCreate
}