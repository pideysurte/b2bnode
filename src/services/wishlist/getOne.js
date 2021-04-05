import db from '../../database/models/index';

const getOne = async (body) => {
   //let ids = JSON.parse(lista.data)
   let productos
   
   if (body.idEstablishment>=1) {
         productos = await db.b2bWishlist.findAll({
            raw:true,
            where: {
              idUserapp: body.idUserapp,
              idEstablishment : body.idEstablishment
            }
          }).then(data => {
            return data
          }).catch(e => {
            console.log(e);
          });
   }
   let ids =[]
    productos.forEach(
        element => ids.push(element.idProduct)        
      )
    productos =  await db.b2bProductsCedi.findAll({
      where: {
        id: ids
      }
    }).then(data => {
      return data
    }).catch(e => {
      console.log(e);
    });
  return productos
}

module.exports = {
  getOne
}