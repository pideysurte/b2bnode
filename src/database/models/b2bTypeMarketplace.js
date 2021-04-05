export default function (sequelize, DataTypes) {
    const b2bTypeMarketplace = sequelize.define('b2bTypeMarketplace', {
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
        tableName: 'b2b_type_marketplace'
    });
    b2bTypeMarketplace.associate = function (models) {
        b2bTypeMarketplace.hasMany(models.b2bMarketPlace, {
            foreignKey: 'id',
            as: 'b2bMarketPlace'
        });
    }
    return b2bTypeMarketplace;
};
