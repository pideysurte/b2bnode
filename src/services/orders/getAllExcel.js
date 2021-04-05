import db from '../../database/models/index';

const getAllExcel = async () => {
        let Excel = await db.b2bOrders.findAll({
            raw: true,
            attributes: ['id', 'products', 'status', 'date'],
            include: [{
                model: db.b2bUserApp,
                as: 'b2bUserApp',
                attributes: ['id', 'name']
            }, {
                model: db.b2bMarketPlace,
                as: 'b2bMarketPlace',
                attributes: ['id', 'name']
            }, {
                model: db.b2bCedi,
                as: 'b2bCedi',
                attributes: ['id', 'name']
            }, {
                model: db.b2bUserApp,
                as: 'b2bUserApp',
                attributes: ['id', 'name']
            }, {
                model: db.b2bFabDist,
                as: 'b2bFabDist',
                attributes: ['id', 'name']
            }, {
                model: db.b2bTypeShipping,
                as: 'b2bTypeShipping',
                attributes: ['id', 'name']
            }, {
                model: db.b2bUserComercialCedi,
                as: 'b2bUserComercialCedi',
                attributes: ['id', 'name']
            }, {
                model: db.b2bEstablecimientosClientCedi,
                as: 'b2bEstablecimientosClientCedi',
                attributes: ['id', 'name']
            }]
        })
        .then(data => {
            return data;
        }).catch(e => {
            console.log(e);
        });
       return Excel
        
        
}

module.exports = {
    getAllExcel
}