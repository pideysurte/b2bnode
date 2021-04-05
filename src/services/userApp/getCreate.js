import db from '../../database/models/index';
import { wellcomeuserwhite } from '../../services/mails/wellcomeuserwhite';
import { wellcomeuserasoc } from '../../services/mails/wellcomeuserasoc';
const getCreate = async (body) => {
  var usuario = await db.b2bUserApp.create({
           idMarketplace: body.idMarketplace,
           name: body.name,
           password: body.password,
           email: body.email,
           phone: body.phone,
           token: body.token,
           img: "imagen1.jpg",
           pd: 1,
           tyc: 1,
           token: "token",
           ActMarketplaceAso: 1
    }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  })

  if (usuario.dataValues.id){
      var market = await db.b2bMarketPlace.findOne({
        raw:true,
        where: {
          id: body.idMarketplace
        }
      }).then(data => { return data }).catch(e => {
        console.log(e);
      })      
      if (market.typeMarketplace== "1"){
        wellcomeuserasoc(market.name, body.email)
      }else{
        wellcomeuserwhite(market.name, body.email)
      }
  }

  return usuario


}

module.exports = {
  getCreate
}