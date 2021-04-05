export default function (sequelize, DataTypes) {
    const b2bWishlist = sequelize.define('b2bWishlist', {
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
        idCedi: {
            type: DataTypes.INTEGER(11),
            allowNull:true,
            field: 'id_cedi'
        },
        idEstablishment: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_establishment'
        },
        idProduct: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_product'
        },
        data: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'data'
        },
        createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'created_at'
            },
        updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'updated_at'
        }
    }, {
        tableName: 'b2b_wishlist'
    });

    return b2bWishlist;
};
