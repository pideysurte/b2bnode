import db from '../../database/models/index';
const getAllDest = async (body) => {
return await db.b2bProductsCedi.findAll({
                where:{
                  idCedi:body.idCedi,
                  featured: 1
                }
              })
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAllDest
}