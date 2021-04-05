import db from '../../database/models/index';
const getAllCedisDir = async (body) => {
     function getDistanciaMetros(lat1,lon1,lat2,lon2)
      {
        var rad = function(x) {return x*Math.PI/180;}
        var dLat = rad( lat2 - lat1 );
        var dLong = rad( lon2 - lon1 );
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
        Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      
        var d = R * c * 1000; 
        return d ; 
      }
     let query = {
       idMarketplace: body.idMarketplace,
       status: 1,
       actCedi: 1 
     }
    if(body.typeMarketplace = "2"){
       query = {
         idMarketplaceASo: body.idMarketplace,
         status: 1,
         actCedi: 1 
       };
    }

   let cedis = await db.b2bCedi.findAll({
        raw:true,
        where: query,
        attributes: ['id', 'name', 'idMarketplace', 'img', 'socialRef', 'address', 'emailServiceClient','coordinates']
    }).then(data => {
         data.forEach(element => element.socialRef = JSON.parse(element.socialRef));
        return data;
    }).catch(e => {
        console.log(e);
    });

    let datos=[]
    cedis.forEach(element => {
        let coo = JSON.parse(element.coordinates)
        let lat1 = coo.lat
        let lon1 = coo.lng
        let lat2 = body.lat
        let lon2 = body.lng
        let dis = getDistanciaMetros(lat1,lon1,lat2,lon2)
            dis = parseInt(dis)
            if(dis <= coo.radio ){
              datos.push(element)
            }
    })
    return datos
}

module.exports = {
    getAllCedisDir
}