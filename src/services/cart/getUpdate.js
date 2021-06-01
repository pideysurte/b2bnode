//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdate = async (body) => {
   let usercart =  await db.b2bCart.findOne({
                        where: {
                          idUserapp: body.idUserapp
                        }
                    }).then(data => {
                        return data
                    }).catch(e => {
                        console.log(e);
                    });

                    if (usercart.length == 0) {
                      return await db.b2bCart.create({
                                idUserapp: body.idUserapp,
                                data: body.data
                              }).then(data => {
                                return data;
                              });
                    }else{
                      return await db.b2bCart.update({
                              data: body.data
                              }, {
                                where: {
                                  idUserapp: body.idUserapp
                                }
                              }).then(data => {
                                return data;
                              });
                    }  
}

module.exports = {
  getUpdate
}