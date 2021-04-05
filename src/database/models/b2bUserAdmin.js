export default function (sequelize, DataTypes) {
    const b2bUserAdmin = sequelize.define('b2bUserAdmin', {
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
            access: {
            	type: DataTypes.TEXT('long'),
            	allowNull: false,
            	field: 'access'
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
        tableName: 'b2b_user_admin'
    });

    return b2bUserAdmin;
};
