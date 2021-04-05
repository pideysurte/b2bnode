export default function (sequelize, DataTypes) {
    const b2bUserApp = sequelize.define('b2bUserApp', {
		    id: {
		        type: DataTypes.INTEGER(11),
		        allowNull: false,
		        primaryKey: true,
		        autoIncrement: true,
		        field: 'id'
            },
		    idMarketplace: {
		        type: DataTypes.INTEGER(11),
		        allowNull: false,
		        field: 'id_marketplace'
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
            password: {
                type: DataTypes.STRING(90),
                allowNull: false,
                field: 'password'
            },
            phone: {
                type: DataTypes.STRING(45), 
                allowNull: false,
                field: 'phone'
            },
            pd: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'pd'
            },
            tyc: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'tyc'
            },
             token: {
                type: DataTypes.STRING(80),
                allowNull: true,
                field: 'token'
            },
             status: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'status'
             },
             img: {
                 type: DataTypes.STRING(60),
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
        tableName: 'b2b_user_app'
    });

    b2bUserApp.associate = function (models) {
        b2bUserApp.belongsTo(models.b2bMarketPlace, {
            foreignKey: 'idMarketplace',
            as: 'b2bMarketPlace'
        })
        b2bUserApp.hasMany(models.b2bOrders, {
            foreignKey: 'id',
            as: 'b2bOrders'
        })

        
    }

    return b2bUserApp;
};
