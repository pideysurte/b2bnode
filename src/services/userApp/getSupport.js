import db from '../../database/models/index';


const getSupport = async (body) => {
    return await db.b2bSupport.create({
        idUserapp: body.idUserapp,
        idMarketplace: body.idMarketplace,
        data: body.data
    }).then(data => {
        return data;
    }).catch(e => {
        console.log(e);
    });
}

module.exports = {
    getSupport
}