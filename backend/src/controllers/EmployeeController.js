const Employee = require('../models/Employee');

module.exports = {
    async get(req, res){
        return res.json({"msg": "metodo GET EMPLOYEE"});
    },
    add(req, res){
        const entity = new Employee(req.body);

        entity.save(err =>{
            if(err) return res.status(500).send(err);
            return res.status(200).send(entity);
        });
    }
}