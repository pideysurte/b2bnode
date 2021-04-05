export default function (sequelize, DataTypes) {
    const b2bMarketPlace = sequelize.define('b2bMarketPlace', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        ActMarketplaceAso: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            field: 'act_marketplace'
        },
        typeSolution: {
            type: DataTypes.INTEGER(2),
            allowNull: true,
            field: 'type_solution'
        },
        typeMarketplace: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'type_marketplace'
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name'
        },
        nameClient: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name_client'
        },
        img: {
            type: DataTypes.STRING(60),
            allowNull: true,
            field: 'img'
        },
        weight: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'weight',
            defaultValue: '100'
        },
        width: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'width',
            defaultValue: '100'
        },
        height: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'height',
            defaultValue: '100'
        },
        phone: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'phone'
        },
        typeDocument: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'type_document'
        },
        numberDocument: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'number_document'
        },
        address: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'address'
        },
        note: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'note'
        },
        status: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            field: 'status'
        },
        versMarketplace: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'vers_marketplace'
        },
        textTyc: {
            type: DataTypes.TEXT('long'),
            field: 'text_tyc'
        },
        textPd: {
            type: DataTypes.TEXT('long'),
            field: 'text_pd'
        },
        socialRef: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'social_ref'
        },
        textScreenCedi: {
            type: DataTypes.TEXT('long'),
            field: 'text_screen_cedi'
        },
        textScreenCedi: {
            type: DataTypes.TEXT('long'),
            field: 'text_screen_cedi'
        },
        faqs: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'faqs'
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
        tableName: 'b2b_marketplace'
    });
	b2bMarketPlace.associate = function (models) {

	    b2bMarketPlace.hasMany(models.b2bUserApp, {
	        foreignKey: 'idMarketplace',
	        as: 'b2bUserApp'
        })
	    b2bMarketPlace.belongsTo(models.b2bStatus, {
	        foreignKey: 'status',
	        as: 'b2bStatus'
	    });
	    b2bMarketPlace.belongsTo(models.b2bTypeMarketplace, {
	        foreignKey: 'typeMarketplace',
	        as: 'b2bTypeMarketplace'
        });
        
        b2bMarketPlace.belongsTo(models.b2bOrders, {
            foreignKey: 'id',
            as: 'b2bOrders'
        })
	}
    return b2bMarketPlace;
};