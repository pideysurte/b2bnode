//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
   let userwishlist = await db.b2bWishlist.findOne({
                        where: {
                            idUserapp: body.idUserapp,
                            idCedi: body.idCedi,
                            idEstablishment: body.idEstablishment,
                            idProduct: body.idProduct
                        }
                    }).then(data => {
                        return data
                    }).catch(e => {
                        console.log(e);
                    });
                    if (userwishlist == null ) {
                      return await db.b2bWishlist.create({
                                idUserapp: body.idUserapp,
                                idEstablishment: body.idEstablishment,
                                idCedi: body.idCedi,
                                idProduct: body.idProduct,
                                data:"[]"
                              }).then(data => {
                                return data;
                              });
                    }
}

module.exports = {
  getUpdate
}