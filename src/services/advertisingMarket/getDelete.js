import db from '../../database/models/index';;

const getDelete = async (body) => {
    let del = 0
    let AdvertisingMarket = await db.b2bAdvertisingMarket.findOne({
        raw:true,
        where: {
          id: body.id
        }
      }).then(data => { return data }).catch(e => {
        console.log(e);
      });
     
      
      let fecha_actual =  new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
      
      if(fecha_actual > AdvertisingMarket.schedule ){
        await db.b2bAdvertisingMarket.destroy({
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