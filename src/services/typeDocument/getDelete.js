import db from '../../database/models/index';;

const getDelete = async (body) => {
    let del = 0
    let Establecimientos = await db.b2bEstablecimientosClientCedi.findOne({
        raw:true,
        where: {
            typeDocument : body.id
        }
      }).then(data => {
            return data
         }).catch(e => {
            console.log(e);
         });
         if(!Establecimientos){
            await db.b2bTypeDocument.destroy({
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