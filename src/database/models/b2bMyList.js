export default function (sequelize, DataTypes) {
    const b2bMyList = sequelize.define('b2bMyList', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        idUserApp: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_user_app'
        },
        idCedi: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_cedi'
        },
        idEstablecimiento: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_establecimiento'
        },
        idProduct: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_product'
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
        tableName: 'b2b_my_list'
    });

    return b2bMyList;
};