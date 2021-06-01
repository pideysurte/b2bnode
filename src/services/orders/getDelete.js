import db from '../../database/models/index';;

const getDelete = async (body) => {
    return await db.b2bOrders.destroy({
        where: {
            id: body.id
        }
    }).then(data => {
        return data;
    }).catch(e => {
        console.log(e);
    });
}

module.exports = {
    getDelete
}