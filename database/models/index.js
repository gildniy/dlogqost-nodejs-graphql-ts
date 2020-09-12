const config = require('../config/config')['development']
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(config['dbUrl']);
const db = {};
const models = [];

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const modules = [
    require('./user'),
    require('./post'),
    require('./comment')
]

modules.forEach(module => {
    const model = module(sequelize, Sequelize)
    db[model.name] = model
    models.push(model)
});

models.forEach(model => {
    if (db[model.name].associate) {
        db[model.name].associate(db)
    }
});

module.exports = {...db, sequelize, Sequelize};