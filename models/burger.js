module.exports = function(sequelize, DataTypes) {
var Burger = sequelize.define("Burger", {
  type: DataTypes.STRING,
  consume: { 
      type: DataTypes.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
});

return Burger;
}