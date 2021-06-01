import db from '../../database/models/index';

const getAllId = async (body) => {
    return await db.b2bUserApp.findAll({
        where: {
            idMarketplace: body.idMarketplace
        }
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });
}

module.exports = {
    getAllId
}