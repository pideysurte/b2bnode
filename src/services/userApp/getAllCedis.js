import db from '../../database/models/index';
const getAllCedis = async (body) => {
    console.log(body)
    let cedis =[]
    let userCedis = await db.b2bEstablecimientosClientCedi.findAll({
        where: {
            emailUser: body.emailUser,
            status:1
        },
        attributes: ['idCedi']
    }).then(function(cedis){
        return cedis
    }).catch(e => {
            console.log(e);
        });

    if (userCedis.length ==  0) {
        return await db.b2bCedi.findAll({
            raw: true,
            where: {
                idMarketplace: body.idMarketplace,
                status: 1 ,
                actCedi: 1              
            },
            attributes: ['id', 'name', 'idMarketplace', 'img', 'socialRef', 'address']
        }).then(data => {
             data.forEach(element => element.socialRef = JSON.parse(element.socialRef));
             cedis.push({
                 "data": data,
                 "id": 0
             })
             return cedis;
            }).catch(e => {
                console.log(e);
            });
        
    } else{         
         let ids =[];
         userCedis.forEach(element => {
             ids.push(element.idCedi)
         })
       
         return await db.b2bCedi.findAll({
              raw: true,
             where: {
                 id: ids,
                 status:1,
                 actCedi: 1 
             },
             attributes: ['id', 'name', 'idMarketplace', 'img', 'socialRef', 'address']
         }).then(data => {
             data.forEach(element => element.socialRef = JSON.parse(element.socialRef));
             cedis.push({
                 "data":data,
                  "id":1
             })
             return cedis;
         }).catch(e => {
             console.log(e);
         });
    }   
}

module.exports = {
    getAllCedis
}