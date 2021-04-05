export default function (sequelize, DataTypes) {
    const b2bUserComercialCedi = sequelize.define('b2bUserComercialCedi', {
		    id: {
		        type: DataTypes.INTEGER(11),
		        allowNull: false,
		        primaryKey: true,
		        autoIncrement: true,
		        field: 'id'
            },
            idCedi: {
            	type: DataTypes.INTEGER(11),
            	allowNull: false,
            	field: 'id_cedi'
            },
		    name: {
		        type: DataTypes.STRING(45),
		        allowNull: false,
		        field: 'name'
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: 'email'
            },
            phone: {
            		type: DataTypes.STRING(45),
            		allowNull: true,
            		field: 'phone'
            	},
            status: {
            		type: DataTypes.INTEGER(1),
            		allowNull: true,
            		field: 'status'
            	},
            img: {
            		type: DataTypes.STRING(90),
            		allowNull: true,
            		field: 'img'
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
        tableName: 'b2b_commercial_cedi'
    });
      b2bUserComercialCedi.associate = function (models) {
      	b2bUserComercialCedi.hasMany(models.b2bEstablecimientosClientCedi, {
      		foreignKey: 'idCommercial',
      		as: 'b2bEstablecimientosClientCedi'
		  })
		b2bUserComercialCedi.belongsTo(models.b2bOrders, {
            foreignKey: 'id',
            as: 'b2bOrders'
        })
      }
    return b2bUserComercialCedi;
};
