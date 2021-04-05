export default function (sequelize, DataTypes) {
    const b2bFabDist = sequelize.define('b2bFabDist', {
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
        contractor: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'contractor'
        },
        phoneContractor: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'phone_contractor'
        },
        typeDocument: {
            type: DataTypes.INTEGER(11),
            field: 'type_document'
        },
        numberDocument: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'number_document'
        },
        address: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'address'
        },
        note: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'note'
        },
        status: {
            type: DataTypes.INTEGER(11),
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
        tableName: 'b2b_FabDist'
    });
	b2bFabDist.associate = function (models) {
	    b2bFabDist.belongsTo(models.b2bStatus, {
	        foreignKey: 'status',
	        as: 'b2bStatus'
        })
        b2bFabDist.hasMany(models.b2bOrders, {
            foreignKey: 'id',
            as: 'b2bOrders'
        })
	}
    return b2bFabDist;
};
