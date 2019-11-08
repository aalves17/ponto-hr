const express = require("express");
const mongoose = require("mongoose");
const http = require("http"); //carregando modulo HTTP
const routes = require('./routes');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb://aamontanher:aamontanher@cluster0-shard-00-00-yludg.mongodb.net:27017,cluster0-shard-00-01-yludg.mongodb.net:27017,cluster0-shard-00-02-yludg.mongodb.net:27017/ponto_db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(routes);
server.listen(3333);