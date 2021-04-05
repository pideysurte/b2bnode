export default function (sequelize, DataTypes) {
    const b2bNotifications = sequelize.define('b2bNotifications', {
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
        data: {
            type: DataTypes.STRING(110),
            allowNull: false,
            field: 'data'
        },
        cri1: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'cri1'
        },
        cri2: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'cri2'
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
        tableName: 'b2b_notification'
    });

    return b2bNotifications;
};
