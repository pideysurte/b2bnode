import db from '../../database/models/index';

const getAllMarketplace = async (body) => {
    let id = body.idMarketplace
    let cedis = await db.b2bMarketPlace.findOne({
        where: {
            id,
            ActMarketplaceAso: 1
        },
        attributes: ['textTyc', 'textPd', 'faqs', 'socialRef']
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });   
    let data
    let faqs = JSON.parse(cedis.dataValues.faqs)
    let social = JSON.parse(cedis.dataValues.socialRef)
   
    return data = {
        "textTyc": cedis.dataValues.textTyc,
        "textPd": cedis.dataValues.textPd,
        "socialRef": social,
        "faqs": faqs
    }
}

module.exports = {
    getAllMarketplace
}
