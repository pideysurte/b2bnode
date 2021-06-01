import db from '../../database/models/index';;

const getDelete = async (body) => {
    let del = 0
        let MarketPlace = await db.b2bMarketPlace.findOne({
            raw:true,
            where: {
                typeMarketplace : body.id
            }
        }).then(data => {
            return data
        }).catch(e => {
            console.log(e);
        });

        if(!MarketPlace ){
            let TypeMarketplace = await db.b2bTypeMarketplace.destroy({
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