import db from '../../database/models/index';

const getAllId = async (body) => {
    return await db.b2bCategory.findAll({
        where: {
            idCedi: body.idCedi,
            status: 1
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