import db from '../../database/models/index';


const getCreate = async (body) => {  
    let datos =""
    let ids = []
    let error= 0
    let cedi = await db.b2bCedi.findOne({
      raw: true,
      where: {
        id: body.idCedi
      },
      attributes: ['actCedi']
    }).then(data => {
      return data
    }).catch(e => {
      console.log(e);
    });
    if(cedi.actCedi==1){
              let products = body.products
              products.forEach(function (valor, indice, array) {
                ids.push(valor.idProducto)
              })
              let productscedi = await db.b2bProductsCedi.findAll({
                      where:{
                        id:ids
                      },
                      attributes: ['id', 'price_tax']
                })
                  .then(data => {
                    return data;
                  }).catch(e => {
                    console.log(e);
                  })
                  productscedi.forEach(function (valorpc, indice, array) {                    
                        products.forEach(function (valor, indice, array) {
                          if (valorpc.dataValues.id == valor.idProducto){
                              if (valorpc.dataValues.price_tax != valor.priceTax) {
                                  error = 1
                              }
                          }
                        })
                    })
                    
                    if (error==0){
                        console.log(body)
                          body.products = JSON.stringify(body.products)
                          return await db.b2bOrders.create(body).then(data => {
                             datos = {
                              orden: data.dataValues.id,
                              cedisConNovedad: 1,
                              generado: 1
                            }
                            return datos;
                          }).catch(e => {
                            console.log(e);
                          })
                    }else{
                         datos = {
                          orden: 0,
                          cedisConNovedad: 1,
                          generado: 0,
                          productosConNovedad: 1
                        }
                        return datos;
                    } 
    }else{
      return datos = {
        orden: 0,
        cedisConNovedad: 2,
        generado: 0
      }
    }
      

}

module.exports = {
  getCreate
}