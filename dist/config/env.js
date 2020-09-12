"use strict";
require('dotenv').config();
module.exports = {
    SERVER_PORT: process.env.SERVER_PORT,
    DEV_DATABASE_URL: process.env.DEV_DATABASE_URL,
};
