export default function (sequelize, DataTypes) {
    const b2bAdvertisingMarket = sequelize.define('b2bAdvertisingMarket', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        idMarketplaceASo: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_marketplace_aso'
        },
        img: {
            type: DataTypes.STRING(90),
            field: 'imagen'
        },
        link: {
            type: DataTypes.STRING(120),
            field: 'link'
        },
        description: {
            type: DataTypes.TEXT('long'),
            field: 'description'
        },
        imgDescription: {
            type: DataTypes.STRING(255),
            field: 'img_description'
        },
        schedule: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'fecha'
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
        tableName: 'b2b_advertising_market_aso'
    });

    return b2bAdvertisingMarket;
};
