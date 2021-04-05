export default function (sequelize, DataTypes) {
    const b2bOrders = sequelize.define('b2bOrders', {
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
        idCedi: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_cedi'
        },
        idRoute: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_route'
        },
        idTypeShipping: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_type_shipping'
        },
        idPaymentMethods: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_payment_methods'
        },
        typeFreight: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'type_freight'
        },
        valFreight: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'val_freight'
        },
        idEstablishments: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_establishments'
        },
        idFabDist: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_fab_dist'
        },
        idComercial: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_comercial'
        },
        products: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'products'
        },
        date: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'date'
        },
        status: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
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
        tableName: 'b2b_orders'
    });
      b2bOrders.associate = function (models) {
          b2bOrders.belongsTo(models.b2bUserApp, {
              foreignKey: 'idUserapp',
              as: 'b2bUserApp'
          })
          b2bOrders.belongsTo(models.b2bMarketPlace, {
              foreignKey: 'idMarketplace',
              as: 'b2bMarketPlace'
          })
          b2bOrders.belongsTo(models.b2bCedi, {
              foreignKey: 'idCedi',
              as: 'b2bCedi'
          })
          b2bOrders.belongsTo(models.b2bTypeShipping, {
              foreignKey: 'idTypeShipping',
              as: 'b2bTypeShipping'
          })
          b2bOrders.belongsTo(models.b2bEstablecimientosClientCedi, {
              foreignKey: 'idEstablishments',
              as: 'b2bEstablecimientosClientCedi'
          })
          b2bOrders.belongsTo(models.b2bFabDist, {
              foreignKey: 'idFabDist',
              as: 'b2bFabDist'
          })
          b2bOrders.belongsTo(models.b2bUserComercialCedi, {
              foreignKey: 'idComercial',
              as: 'b2bUserComercialCedi'
          })
          
          
      }
    return b2bOrders;
};
