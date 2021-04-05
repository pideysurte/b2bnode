import db from '../../database/models/index';

const getFaqs = async (body) => {
  return await db.b2bMarketPlace.findOne({
    where: {
      id: body.id
    },
    attributes: ['faqs']
  }).then(data => { 
    data.faqs = JSON.parse(data.faqs)
    return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getFaqs
}