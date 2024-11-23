const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Clientes {
    constructor() {
        this.model = database.db.define("Clientes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(32),
                allowNull: false
            },
        })
    }
}

module.exports = new Clientes().model;