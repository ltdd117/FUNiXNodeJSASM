const Sequelize = require('sequelize')

const sequelize = new Sequelize('node_complete', 'root', 'Gon11797', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize