import db from '../../database/models/index';

const unique = async (body) => {
  
  return await db.b2bUserApp.findOne({
    where: {
      email: body.email,
      idMarketplace : body.idMarketplace
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  unique
}