import db from '../../database/models/index';

const getDelete = async (id) => {
    return await db.b2bUserApp.destroy({
        where: {
            id: id
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