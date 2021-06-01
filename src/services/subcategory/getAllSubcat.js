import db from '../../database/models/index';

const getAllSubcat = async (body) => {

    let subcategory = await db.b2bProductsCedi.findAll({
        where: {
            idCategory: body.idCategory,
            status: 1
        }, attributes: ['idSubcategory'],
            group: ['idSubcategory'],
            include: [{
                model: db.b2bSubcategory,
                where: {
                  status: 1
                },
                as: 'b2bSubcategory',
                attributes: ['id','name']
            }]
    }).then(data => {
        return data
    }).catch(e => {
        console.log(e);
    });
   subcategory.forEach(function (valor, indice, array) {

        
      //  console.log(valor);
    });
    return subcategory
}

module.exports = {
     getAllSubcat
}