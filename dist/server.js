"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var apollo_server_express_1 = require("apollo-server-express");
var models = require('../database/models');
var env = require('./config/env');
var typeDefs = require('./schema/schema');
var resolvers = require('./resolverMap');
var depthLimit = require('graphql-depth-limit');
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs, resolvers: resolvers,
    context: { models: models },
    validationRules: [depthLimit(5)],
});
var app = express_1.default();
app.use('*', cors_1.default());
app.use(compression_1.default());
server.applyMiddleware({ app: app, path: '/graphql' });
app.listen({ port: env.SERVER_PORT }, function () {
    console.log('GraphQL is now running on http://localhost:%d/graphql', env.SERVER_PORT);
});
