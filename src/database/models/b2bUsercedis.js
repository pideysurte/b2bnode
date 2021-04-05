export default function (sequelize, DataTypes) {
    const b2bUsercedis = sequelize.define('b2bUsercedis', {
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
            field: 'createdAt'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updatedAt'
        }

    }, {
        tableName: 'b2b_user_cedis'
    });

    return b2bUsercedis;
};
