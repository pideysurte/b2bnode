export default function (sequelize, DataTypes) {
    const b2bTypeTaxes = sequelize.define('b2bTypeTaxes', {
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
        tableName: 'b2b_type_taxes'
    });

      b2bTypeTaxes.associate = function (models) {
          b2bTypeTaxes.hasMany(models.b2bEstablecimientosClientCedi, {
              foreignKey: 'typeTaxes',
              as: 'b2bEstablecimientosClientCedi'
          });
      }

    return b2bTypeTaxes;
};