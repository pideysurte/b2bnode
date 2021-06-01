import db from '../../database/models/index';;

const getDelete = async (id) => {
    let del = 0
    let Cedis = await db.b2bCedi.findOne({
        raw:true,
        where: {
            idFabDist : body.id
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    }); 
    if( !Cedis ){
        await db.b2bFabDist.destroy({
            where: {
                id: id
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