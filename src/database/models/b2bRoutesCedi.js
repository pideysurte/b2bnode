export default function (sequelize, DataTypes) {
    const b2bRoutescedi = sequelize.define('b2bRoutescedi', {
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
        idCedi: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_cedi'
        },
        attentionDaysRoutes: {
            type: DataTypes.INTEGER(11),
            field: 'attention_days_routes'
        },
        textPr: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'text_pr'
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
        tableName: 'b2b_routes_cedi'
    });

      b2bRoutescedi.associate = function (models) {
          b2bRoutescedi.hasMany(models.b2bEstablecimientosClientCedi, {
              foreignKey: 'idRoute',
              as:'b2bEstablecimientosClientCedi'
          });
      }
    return b2bRoutescedi;
};
