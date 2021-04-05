import db from '../../database/models/index';
const getAllWhite = async () => {
return await db.b2bMarketPlace.findAll({
                    where: {
                        typeMarketplace: 1
                    }
                })
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAllWhite
};