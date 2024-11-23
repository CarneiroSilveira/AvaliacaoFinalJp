const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Cliente = require("./clientes");
const Filme = require("./filmes");

class FilmesLocados {
    constructor() {
        this.model = database.db.define("Filmes_Locados", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            idFilme: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Cliente,
                    key: "id"
                }
            },
            idCliente: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Filme,
                    key: "id"
                }
            },

            dataLocacao: {
                type: DataTypes.DATE,
                allowNull: true
            },

            dataDevolucao: {
                type: DataTypes.DATE,
                allowNull: true
            }

        }, { updatedAt: false, createdAt: false })
        this.model.hasMany(Filme, { foreignKey: 'idFilme' });
        Filme.belongsTo(this.model, { foreignKey: 'idFilme' });

        this.model.hasMany(Cliente, { foreignKey: 'idCliente' });
        Cliente.belongsTo(this.model, { foreignKey: 'idCliente' });
    }
}

module.exports = new FilmesLocados().model;