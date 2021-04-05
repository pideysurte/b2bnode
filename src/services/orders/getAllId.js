import db from '../../database/models/index';

const getAllId = async (body) => {
    return await db.b2bOrders.findAll({
        where: {
            idCedi: body.idCedi
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