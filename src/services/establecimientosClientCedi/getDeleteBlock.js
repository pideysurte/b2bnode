//import fs from 'fs';
import db from '../../database/models/index';;

const getDeleteBlock = async (body) => {
    let ids = []
    let data 
    let establecimientos = await db.b2bEstablecimientosClientCedi.findAll({
        raw: true,
        where: {
            id: body.idEstablishment
        },
        attributes: ['idBlockUser']
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });

    if (establecimientos[0].idBlockUser != null) {  
        ids = JSON.parse(establecimientos[0].idBlockUser)
           var i = ids.indexOf(body.idUserapp);
            if (i >= 0) {
                ids.splice(i, 1);
            }
             ids = JSON.stringify(ids)

             return await db.b2bEstablecimientosClientCedi.update({
                 idBlockUser: ids
             }, {
                 where: {
                     id: body.idEstablishment
                 }
             }).then(data => {
                 return data;
             }).catch(e => {
                 console.log(e);
             })
    }
    return data ={
        "item":"Desbloqueado"
    }

}

module.exports = {
     getDeleteBlock
}