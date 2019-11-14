const express = require("express");
const mongoose = require("mongoose");
const http = require("http"); //carregando modulo HTTP
const routes = require('./routes');
const cors = require('cors');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://aamontanher:aamontanher@cluster0-yludg.mongodb.net/cc_db?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true, // commented out currently
    dbName: 'cc_db'
});

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);