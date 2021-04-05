import db from '../../database/models/index';
const getAllMarket = async (body) => {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hoy =  year +"-"+month +"-"+ day +"";
  let market =  await db.b2bAdvertisingMarket.findAll({
    where: {
      idMarketplaceASo: body.idMarketplaceASo
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });

  let datos=[]
  console.log(market)
  market.forEach(element => {
    if( (new Date(element.dataValues.schedule).getTime() > new Date(hoy).getTime()))
      {
        datos.push(element.dataValues)
      }     
  })
  return datos
  
}

module.exports = {
  getAllMarket
}