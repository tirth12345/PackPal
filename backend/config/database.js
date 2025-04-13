const { Sequelize } = require('sequelize');

// Create a new Sequelize instance for MySQL
const sequelize = new Sequelize('PackPalDB', 'root', 'Tirth@2005', {
    host: 'localhost', // Replace with your MySQL host
    dialect: 'mysql',  // Specify MySQL as the dialect
    logging: false,    // Disable logging (optional)
});

module.exports = sequelize;