import db from '../../database/models/index';
import bodyParser from 'body-parser';
const getAllCat = async (body) => {
return await db.b2bProductsCedi.findAll({
                where:{
                  idCategory: body.idCategory,
                  idSubcategory: body.idSubcategory
                }
              })
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAllCat
}