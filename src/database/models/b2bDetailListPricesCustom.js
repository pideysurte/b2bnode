export default function (sequelize, DataTypes) {
    const b2bDetailListPricesCustom = sequelize.define('b2bDetailListPricesCustom', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        idProduct: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_product'
        },
        idListPrices: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_list_prices'
        },
        priceTax: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'price_tax'
        },
        orderMinCant: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'order_min_cant'
        },
        orderMinUmd: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
            field: 'order_min_umd'
        },
        umdTax: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
            field: 'umd_tax'
        },
        valUnidUmd: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
            field: 'val_unid_umd'
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
        tableName: 'b2b_detail_list_prices_custom'
    });
    return b2bDetailListPricesCustom;
};