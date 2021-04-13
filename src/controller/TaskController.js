const TaskModel = require('../model/TaskModel');
const { startOfDay,
        endOfDay,
        startOfWeek,
        endOfWeek,
        startOfMonth,
        endOfMonth,
        startOfYear,
        endOfYear
     } = require('date-fns');
 // pegar a data do começo do dia até o final / pegar o primeiro dia e data da semena e final /

const current = new Date();

class TaskController {

    async create(req, res) {
        const task = new TaskModel(req.body);
        await task.save().then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            console.log('ola');
            return res.status(500).json(error);
        });
    }
    
    async update(req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async all(req, res) {
        await TaskModel.find({ macaddress: {'$in': req.params.macaddress}})
            .sort('when') // trás organizado por data e hora
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    // apenas para exibir uma unica tarefa
    async show(req, res) {
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response) {
                return res.status(200).json(response);
            }else {
                return res.status(404).json({error: 'tarefa não encontrada'});
            }
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async delete(req, res) {
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
 
    }

    async done(req, res) {
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    // Lista as tarefas em atraso
    async late(req, res) {
        await TaskModel
        .find({
            'when': {'$lt': current}, // onde a "data e menor do que..." current(data atual)
        "macaddress" : {'$in' : req.params.macaddress} // "$in" retorna apenas as minhas tarefas atrassadas
        })
        .sort('when') // retorna a lista com as datas organizadas
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async today(req, res) {
        await TaskModel
        .find({
            'macaddress': { '$in' : req.params.macaddress},
            'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)} // filtrar "$gte" => data maior ou igual / "$lte" menor ou igual
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async week(req, res) {
        await TaskModel
        .find({
            'macaddress': { '$in' : req.params.macaddress},
            'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)} // filtrar "$gte" => data maior ou igual / "$lte" menor ou igual
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async month(req, res) {
        await TaskModel
        .find({
            'macaddress': { '$in' : req.params.macaddress},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)} // filtrar "$gte" => data maior ou igual / "$lte" menor ou igual
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async year(req, res) {
        await TaskModel
        .find({
            'macaddress': { '$in' : req.params.macaddress},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)} // filtrar "$gte" => data maior ou igual / "$lte" menor ou igual
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async ano(req, res) {
        await TaskModel
        .find({
            'macaddress': { '$in' : req.params.macaddress},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)} // filtrar "$gte" => data maior ou igual / "$lte" menor ou igual
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}

module.exports = new TaskController();