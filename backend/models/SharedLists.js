const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SharedList = sequelize.define('SharedList', {
    list_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    list_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exported_pdf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
});

module.exports = SharedList;