const Model = require('../model/TaskModel');
const { isPast } = require('date-fns'); // Verifica se uma data está no passado

TaskValidation = async (req, res, next) =>{
    const { macaddress, type, title, description, when } = req.body;

    if(!macaddress) {
        return res.status(400).json({ error: 'macaddress é obrigatório! '});
    }else if(!type) {
        return res.status(400).json({ error: 'Tipo é obrigatório! '});
    }else if(!title) {
        return res.status(400).json({ error: 'Título é obrigatório! '});
    }
    else if(!description) {
        return res.status(400).json({ error: 'A Descrição é obrigatório! '});
    }
    else if(!when) {
        return res.status(400).json({ error: 'A data e hora é obrigatório! '});
    }
    else {
        next();
    }
}

module.exports = TaskValidation;