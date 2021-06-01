import db from '../../database/models/index';;

const getDelete = async (body) => {
        let del = 0
        let Establecimientos = await db.b2bEstablecimientosClientCedi.findOne({
            raw:true,
            where: {
                status : body.id
            }
        }).then(data => {
            return data
        }).catch(e => {
            console.log(e);
        });

        
        let Productos = await db.b2bProductsCedi.findOne({
            raw:true,
            where: {
                status : body.id
            }
        }).then(data => {
            return data
        }).catch(e => {
            console.log(e);
        });    
        let Cedis = await db.b2bCedi.findOne({
            raw:true,
            where: {
                status : body.id
            }
        }).then(data => {
            return data
        }).catch(e => {
            console.log(e);
        });          
        
         if(!Establecimientos || !Productos || !Cedis ){
                await db.b2bStatus.destroy({
                    where: {
                        id: body.id
                    }
                }).then(data => {
                    return data;
                }).catch(e => {
                    console.log(e);
                });
                del = 1            
            }    
      return del
        
}

module.exports = {
    getDelete
}