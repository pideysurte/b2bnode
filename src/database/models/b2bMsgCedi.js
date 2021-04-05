export default function (sequelize, DataTypes) {
    const b2bMsgCedi = sequelize.define('b2bMsgCedi', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        msg: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'msg'
        },
        idUserapp: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_userapp'
        },
         idCedi: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_cedi'
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
        tableName: 'b2b_msg_cedi'
    });

    return b2bMsgCedi;
};
