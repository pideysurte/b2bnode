import db from '../../database/models/index';
const getAllAsoc = async () => {
return await db.b2bMarketPlace.findAll({
                    where: {
                        typeMarketplace: 2
                    }
                })
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAllAsoc
}