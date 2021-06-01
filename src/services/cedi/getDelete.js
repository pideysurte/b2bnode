import db from '../../database/models/index';;

const getDelete = async (id) => {
    let del = 0
    let Establecimientos = await db.b2bEstablecimientosClientCedi.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });
    
    let Productos = await db.b2bProductsCedi.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });  


    let Category = await db.b2bCategory.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }); 


    let Subcategory = await db.b2bSubcategory.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }); 

    let AdvertisingCedi = await db.b2bAdvertisingCedi.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }); 

    let Orders = await db.b2bOrders.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return datab2bRoutescedi
    }).catch(e => {
        console.log(e);
    }); 


    let ListPricesCustom = await db.b2bListPricesCustom.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }); 

    let UserComercialCedi = await db.b2bUserComercialCedi.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    })

    let Routescedi = await db.b2bRoutescedi.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }) 

    let Usercedis = await db.b2bUsercedis.findOne({
        raw:true,
        where: {
            idCedi : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }); 
    

    if(!Establecimientos || !Productos || !Category || !Subcategory || !AdvertisingCedi || !Orders || !ListPricesCustom || !UserComercialCedi || !Routescedi || !Usercedis){
        await db.b2bCedi.destroy({
            where: {
                id: id
            }
        }).then(data => {
            return data;
        }).catch(e => {
            console.log(e);
        });
        del=1
    }

    return del
}

module.exports = {
    getDelete
}