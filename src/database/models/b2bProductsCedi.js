export default function (sequelize, DataTypes) {
    const b2bProductsCedi = sequelize.define('b2bProductsCedi', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        idCedi: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_cedi'
        },
        idFabDist: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_fab_dist'
        },
        idCategory: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_category'
        },
        idSubcategory: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_subcategory'
        },
        featured: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            field: 'featured'
        }, 
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name'
        },
        nameTirilla: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'name_tirilla'
        },
        link: {
            type: DataTypes.STRING(120),
            allowNull: true,
            field: 'link'
        }, 
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'description'
        },
        image1: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'image1'
        },
        image2: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'image2'
        },
        image3: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'image3'
        },
        typeOffert: {
            type: DataTypes.INTEGER(1), 
            allowNull: true,
            field: 'type_offert'
        },
        umd: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'umd'
        },
        priceTax: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'price_tax'
        },
        priceUmdTax: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'price_umd_tax'
        },
        orderMinUmd: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'order_min_umd'
        },
        orderMinTax: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'order_min_tax'
        },
        sku: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'sku'
        },
        barcode: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'barcode'
        },
        status: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            field: 'status'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'createdAt'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updatedAt'
        }
    }, {
        tableName: 'b2b_products_cedi'
    });


	b2bProductsCedi.associate = function (models) {
	    b2bProductsCedi.belongsTo(models.b2bSubcategory, {
	        foreignKey: 'idSubcategory',
	        as: 'b2bSubcategory'
	    });
    }
    


    return b2bProductsCedi;
};
