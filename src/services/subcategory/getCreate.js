import db from '../../database/models/index';


const getCreate = async (body) => {
  return await db.b2bSubcategory.create({
    name : body.name,
    idCedi : body.idCedi
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getCreate
}