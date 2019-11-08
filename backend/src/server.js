import express from 'express';
import mongoose from 'mongoose';
import http from 'http';

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb://aamontanher:aamontanher@cluster0-shard-00-00-yludg.mongodb.net:27017,cluster0-shard-00-01-yludg.mongodb.net:27017,cluster0-shard-00-02-yludg.mongodb.net:27017/ponto_db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.listen(3333);