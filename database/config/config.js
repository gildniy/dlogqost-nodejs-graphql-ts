require('dotenv').config();

module.exports = {
    development: {
        dbUrl: process.env.DEV_DATABASE_URL,
        dialect: 'postgres',
    },
}