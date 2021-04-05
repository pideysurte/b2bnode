export default function (sequelize, DataTypes) {
    const b2bStatus = sequelize.define('b2bStatus', {
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
        }

    }, {
        tableName: 'b2b_status'
    });
    b2bStatus.associate = function (models) {
        b2bStatus.hasMany(models.b2bMarketPlace, {
            foreignKey: 'id',
            as: 'b2bMarketPlace'
        });
        b2bStatus.hasMany(models.b2bFabDist, {
            foreignKey: 'id',
            as: 'b2bFabDist'
        });
        
    }
    return b2bStatus;
};
