module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        name: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
    },{
        schema: 'BackendRest',
    });

    return Book;
}