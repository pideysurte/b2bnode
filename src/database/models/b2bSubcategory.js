export default function (sequelize, DataTypes) {
    const b2bSubcategory = sequelize.define(
      "b2bSubcategory",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: "id",
        },
        idCedi: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          field: "id_cedi",
        },
        name: {
          type: DataTypes.STRING(45),
          allowNull: false,
          field: "name",
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: true,
          field: "status",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "createdAt",
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "updatedAt",
        },
      },
      {
        tableName: "b2b_subcategory",
      }
    );
	b2bSubcategory.associate = function (models) {
	    b2bSubcategory.hasMany(models.b2bProductsCedi, {
	        foreignKey: 'idSubcategory',
	        as: 'b2bProductsCedi'
	    });
    }
    
    return b2bSubcategory;
};