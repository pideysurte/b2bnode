export default function (sequelize, DataTypes) {
    const b2bSupport = sequelize.define('b2bSupport', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        idUserapp: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_userapp'
        },
        idMarketplace: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_marketplace'
        },
        data: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'mensaje'
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
        tableName: 'b2b_support'
    });

    return b2bSupport;
};
