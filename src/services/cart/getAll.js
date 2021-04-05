import db from '../../database/models/index';
const getAll = async () => {
return await db.b2bCart.findAll()
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAll
}