//import fs from 'fs';
import db from '../../database/models/index';;

const getUpdateCedis = async (body) => {
    let userCedis = await db.b2bUsercedis.findOne({
        where: {
            idMarketplace: body.idMarketplace,
            idUserapp: body.idUserapp
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });

    if (userCedis == null) {
        return await db.b2bUsercedis.create({
            idMarketplace: body.idMarketplace,
            idUserapp: body.idUserapp,
            data: body.data
        }).then(data => {
            return data;
        });
    } else {
        return await db.b2bUsercedis.update({
            data: body.data
        }, {
            where: {
                idMarketplace: body.idMarketplace,
                idUserapp: body.idUserapp
            }
        }).then(data => {
            return data;
        });
    }
}

module.exports = {
   getUpdateCedis
}