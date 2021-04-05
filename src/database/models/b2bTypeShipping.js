export default function (sequelize, DataTypes) {
    const b2bTypeShipping = sequelize.define('b2bTypeShipping', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name'
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
        tableName: 'b2b_type_shipping'
    })

      b2bTypeShipping.associate = function (models) {
            b2bTypeShipping.hasMany(models.b2bEstablecimientosClientCedi, {
                foreignKey: 'typeShipping',
                as: 'b2bEstablecimientosClientCedi'
            })
            b2bTypeShipping.hasMany(models.b2bOrders, {
                foreignKey: 'id',
                as: 'b2bOrders'
            })
      }

    return b2bTypeShipping;
};