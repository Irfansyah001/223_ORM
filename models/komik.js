module.exports = (sequelize, DataTypes) => { // Define the Komik model
    const Komik = sequelize.define('Komik', { // Model name
        id: { // Define the id field
            type: DataTypes.INTEGER, // Integer type
            autoIncrement: true, // Auto-incrementing
            primaryKey: true // Primary key
        },
        title: { // Define the title field
            type: DataTypes.STRING, // String type
        },
        description: { // Define the description field
            type: DataTypes.STRING, // String type
        },
        author: { // Define the author field
            type: DataTypes.STRING, // String type
        }      
    });
    return Komik; // Return the Komik model
};