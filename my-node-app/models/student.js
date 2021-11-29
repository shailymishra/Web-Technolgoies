module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('students', {
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
    });

    return Student;
}