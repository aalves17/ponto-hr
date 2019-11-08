const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');

const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.send("welcome");
});

/* EMPLOYEE */
routes.get('/employee', EmployeeController.get);
routes.post('/employee', EmployeeController.add);


/* MARKING */

module.exports = routes;