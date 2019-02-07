module.exports = (sequelize, DataTypes) => {
    const Show = sequelize.define('Show', {
        name: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        website: {
            type: DataTypes.STRING
        },
        noOfSeasons: {
            type: DataTypes.INTEGER
        },
    });

    return Show;
}