import db from '../../database/models/index';
const getAll = async () => {
return await db.b2bMarketPlace.findAll({
                      raw:true,
                      include: [{
                        model: db.b2bStatus,
                        as: 'b2bStatus'
                      }, {
                        model: db.b2bTypeMarketplace,
                        as: 'b2bTypeMarketplace'
                      }]
                 })
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAll
}