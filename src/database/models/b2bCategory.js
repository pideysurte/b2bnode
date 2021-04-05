export default function (sequelize, DataTypes) {
    const b2bCategory = sequelize.define('b2bCategory', {
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
            idCedi: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'id_cedi'
            },
            idFabDist: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'id_fab_dist'
            }, 
            nota: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'nota'
            },
            status: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
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
        tableName: 'b2b_category'
    });
    return b2bCategory;
};
