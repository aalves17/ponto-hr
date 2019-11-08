const Employee = require('../models/Employee');

module.exports = {
    async get(req, res){
        return res.json({"msg": "metodo GET EMPLOYEE"});
    },
    async add(req, res){
        return res.json({"msg": "metodo ADD"});
    }
}