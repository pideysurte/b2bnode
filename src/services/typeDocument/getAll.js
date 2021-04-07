import db from '../../database/models/index';
const getAll = async () => {
return await db.b2bTypeDocument.findAll()
                .then(data => {
                  return data;
                }).catch(e => {
                  console.log(e);
                });
}

module.exports = {
  getAll
}