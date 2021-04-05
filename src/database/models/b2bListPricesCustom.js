export default function (sequelize, DataTypes) {
    const b2bListPricesCustom = sequelize.define('b2bListPricesCustom', {
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
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name'
        },
        status: {
            type: DataTypes.INTEGER(1),
             allowNull:true,
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
        tableName: 'b2b_list_prices_custom'
    });

    return b2bListPricesCustom;
};
