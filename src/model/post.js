const database = require('../config/database');
const User = require('./user');

class Post {
    constructor() {
        this.model = database.define('posts', {
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
            autorId: {
                type: database.Sequelize.INTEGER,
                foreignKey: true,
                references: {
                  model: User,
                  key: 'id'  
                }
            }
        });
    }
}

module.exports = (new Post).model;