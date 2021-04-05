export default function (sequelize, DataTypes) {
    const b2bAdvertisingCedi = sequelize.define('b2bAdvertisingCedi', {
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
        img: {
            type: DataTypes.STRING(60),
            field: 'img'
        },
        link: {
            type: DataTypes.STRING(120),
            field: 'link'
        }, 
        schedule: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'schedule'
        },
        persAsoAll: {
                type: DataTypes.INTEGER(11),
                field: 'pers_aso_all'
            },
        listPrices: {
                type: DataTypes.INTEGER(11),
                field: 'list_prices'
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'description'
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
        tableName: 'b2b_advertising_cedi'
    });





    return b2bAdvertisingCedi;
};
