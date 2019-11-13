const Marking = require('../models/Marking');

module.exports = {
    async add(req, res){

        const entity = new Marking(req.body);

        entity.save(err =>{
            if(err) return res.status(500).send(err);
            return res.status(200).send(entity);
        });
    }
}