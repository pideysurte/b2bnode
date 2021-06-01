import db from '../../database/models/index';
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const cedisProducts = async (body) => {
return await db.b2bProductsCedi.findAll({
                where:{
                  idCedi: body.idCedi,
                  name: {
                         [Op.like]: '%' + body.wordSearch + '%'
                    }
                }
              })
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  cedisProducts
};