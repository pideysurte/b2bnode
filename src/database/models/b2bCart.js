export default function (sequelize, DataTypes) {
    const b2bCart = sequelize.define('b2bCart', {
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
        data: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'data'
        },
        createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'created_at'
            },
        updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'updated_at'
        }

    }, {
        tableName: 'b2b_cart'
    });

    return b2bCart;
};
