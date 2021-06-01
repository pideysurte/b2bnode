import db from '../../database/models/index';
const getAll = async () => {
return await db.b2bFabDist.findAll({
                      raw:true,
                      include: [{
                        model: db.b2bStatus,
                        as: 'b2bStatus'
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