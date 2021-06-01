//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdateBlock = async (body) => {
  let BlockUser
  let establecimientos = await db.b2bEstablecimientosClientCedi.findOne({
       where: {
         id: body.idEstablishment
       },
       attributes: ['idBlockUser']
     }).then(data => {
       return data
     }).catch(e => {
       console.log(e);
     })
     if (establecimientos.idBlockUser == "0" || establecimientos.idBlockUser == null) {
        BlockUser = 1
     }else{
        BlockUser = 0
     }
     return await db.b2bEstablecimientosClientCedi.update({
                     idBlockUser: BlockUser
     }, {
        where : {
          id: body.idEstablishment
        }
      }).then(data => {
          return data;
      }).catch(e => {
        console.log(e);
      })  

}

module.exports = {
  getUpdateBlock
}