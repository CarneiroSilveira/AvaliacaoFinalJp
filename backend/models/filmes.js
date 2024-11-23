const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Filmes {
    constructor() {
        this.model = database.db.define("Filmes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            titulo: {
                type: DataTypes.STRING(1024),
                allowNull: false,
                unique: true
            },
            faixaEtaria: {
                type: DataTypes.ENUM("L", "10", "12", "14", "16", "18"),
                allowNull: false
            },
            diretor: {
                type: DataTypes.STRING(255),
                unique: true,
                allowNull: false
            }
        })
    }
}

module.exports = new Filmes().model;