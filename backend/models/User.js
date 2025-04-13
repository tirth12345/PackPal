const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('Owner', 'Admin', 'Member', 'Viewer'),
        allowNull: false,
    },
}, {
    timestamps: false, // Disable createdAt and updatedAt fields
});

module.exports = User;