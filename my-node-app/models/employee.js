'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: {
      type: DataTypes.STRING
    },
    designation:
    {
      type: DataTypes.STRING,
    }, salary: DataTypes.INTEGER
  }, {});
  Employee.associate = function (models) {
    // associations can be defined here
    Employee.belongsTo(models.Company, {
      foreignKey: 'companyId',
      onDelete: 'CASCADE'
    })
  };
  return Employee;
};