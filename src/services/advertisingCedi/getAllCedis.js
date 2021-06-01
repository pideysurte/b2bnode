import db from '../../database/models/index';

const getAllCedis = async (body) => {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hoy =  year +"-"+month +"-"+ day +"";
  let market= await db.b2bAdvertisingCedi.findAll({
    where: {
      idCedi : body.idCedi
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
  let datos=[]
  market.forEach(element => {
    if( (new Date(element.dataValues.schedule).getTime() > new Date(hoy).getTime()))
      {
        datos.push(element.dataValues)
      }     
  });  
  return datos
}

module.exports = {
  getAllCedis
}