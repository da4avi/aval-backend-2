const database = require('../config/database');
const Project = require('./project');

class Task {
    constructor() {
        this.model = database.define('tasks', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.Sequelize.STRING
            },
            conteudo: {
                type: database.Sequelize.STRING
            },
            status: {
                type: database.Sequelize.STRING
            },
            projetoId: {
                type: database.Sequelize.INTEGER,
                foreignKey: true,
                references: {
                  model: Project,
                  key: 'id'  
                }
            }
        });
    }
}

module.exports = (new Task).model;