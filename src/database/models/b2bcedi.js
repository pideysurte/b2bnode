export default function (sequelize, DataTypes) {
    const b2bCedi = sequelize.define('b2bCedi', {
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
        idMarketplaceASo: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'id_marketplace_as'
        }, 
        actCedi: {               
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'act_cedi'
        },
        slogan: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'slogan'
        },
        img: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'img'
        },
        color: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'color'
        },
        name: {
            type: DataTypes.STRING(60),
            allowNull: false,
            field: 'name'
        },
        address: {
            type: DataTypes.STRING(90),
            allowNull: false,
            field: 'address'
        },
        sitecedi: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'sitecedi'
        },
        idFabDist: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_fab_dist'
        },
        socialRef: {
            type: DataTypes.TEXT('long'),
            field: 'social_ref'
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'description'
        },
        nameAdmin: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name_admin'
        },
        phoneAdmin: {
            type: DataTypes.STRING(90),
            allowNull: false,
            field: 'phone_admin'
        },
        emailAdmin: {
            type: DataTypes.STRING(45),
            field: 'email_admin'
        },
        status: {
            type: DataTypes.INTEGER(1),
            field: 'status'
        },
        coordinates: {
            type: DataTypes.STRING(90),
            field: 'coordinates'
        },
        password: {
            type: DataTypes.STRING(90),
            allowNull: false,
            field: 'password'
        },
        methodEmail: {
            type: DataTypes.STRING(45),
            field: 'method_email'
        },
        numbersImages: {
            type: DataTypes.INTEGER(11),
            field: 'numbers_images'
        },
        balanceNotifications: {
            type: DataTypes.INTEGER(11),
            field: 'balance_notifications'
        },
        textTyc: {
            type: DataTypes.TEXT('long'),
            field: 'text_tyc'
        },
        textPd: {
            type: DataTypes.TEXT('long'),
            field: 'text_pd'
        },
        emailServiceClient: {
            type: DataTypes.STRING(45),
            field: 'email_service_client'
        },
        cediHide: {
            type: DataTypes.STRING(255),
            field: 'cedi_hide'
        },
        weight: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'weight'
        },
        width: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'width'
        },
        height: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'height'
        },
        acerca: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'acerca'
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
        tableName: 'b2b_cedi'
    });
    b2bCedi.associate = function (models) {
        b2bCedi.hasMany(models.b2bOrders, {
            foreignKey: 'id',
            as: 'b2bOrders'
        })
    }
    return b2bCedi;
};
