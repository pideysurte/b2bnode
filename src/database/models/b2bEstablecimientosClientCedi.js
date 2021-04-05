export default function (sequelize, DataTypes) {
    const b2bEstablecimientosClientCedi = sequelize.define(
      "b2bEstablecimientosClientCedi",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: "id",
        },
        idCedi: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "id_cedi",
        },
        name: {
          type: DataTypes.STRING(90),
          allowNull: false,
          field: "name",
        },
        emailUser: {
            type: DataTypes.STRING(90),
            allowNull: true,
            field: 'email_user'
        },
        address: {
          type: DataTypes.STRING(45),
          allowNull: false,
          field: "address",
        },
        phone: {
          type: DataTypes.STRING(45),
          allowNull: false,
          field: "phone",
        },
        coordinates: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "coordinates",
        },
        typeDocument: {
          type: DataTypes.INTEGER(11),
          allowNull: true,
          field: "type_document",
        },
        numberDocument: {
          type: DataTypes.STRING(45),
          field: "number_document",
        },
        nameBilling: {
          type: DataTypes.STRING(45),
          allowNull: false,
          field: "name_billing",
        },
        paymentMethods: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "payment_methods",
        },
        nameContac: {
          type: DataTypes.STRING(45),
          allowNull: false,
          field: "name_contac",
        },
        idRoute: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "id_route",
        },
        idListPrices: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "id_list_prices",
        },
        idCommercial: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "id_commercial",
        },
        orderMinAllTax: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "order_min_all_tax",
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "status",
        },
        attentionXpersonsAsocAll: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "attention_x_persons_asoc_all",
        },
        officeUnit: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "office_Unit",
        },
        typeShipping: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "type_shipping",
        },
        typeTaxes: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "type_taxes",
        },
        pricesFreigh: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "prices_freight",
        },
        ticketNoFreigh: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "ticket_no_freight",
        },
        percentageFreightVar: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "percentage_freight_var",
        },
        commetsRoute: {
          type: DataTypes.TEXT("long"),
          allowNull: false,
          field: "commets_route",
        },
        idBlockUser: {
          type: DataTypes.TEXT("long"),
          allowNull: true,
          field: "id_block_user",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "createdAt",
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "updatedAt",
        },
      },
      {
        tableName: "b2b_establishments_client_cedi",
      }
    );

    b2bEstablecimientosClientCedi.associate = function (models) {

        b2bEstablecimientosClientCedi.belongsTo(models.b2bRoutescedi, {
            foreignKey: 'idRoute',
            as: 'b2bRoutescedi'
        })
        b2bEstablecimientosClientCedi.belongsTo(models.b2bUserComercialCedi, {
            foreignKey: 'idCommercial',
            as: 'b2bUserComercialCedi'
        })
  
        b2bEstablecimientosClientCedi.belongsTo(models.b2bTypeShipping, {
            foreignKey: 'typeShipping',
            as: 'b2bTypeShipping'
        })

        b2bEstablecimientosClientCedi.belongsTo(models.b2bTypeTaxes, {
            foreignKey: 'typeTaxes',
            as: 'b2bTypeTaxes'
        })
        b2bEstablecimientosClientCedi.hasMany(models.b2bOrders, {
            foreignKey: 'id',
            as: 'b2bOrders'
        })
    }

    return b2bEstablecimientosClientCedi;
};