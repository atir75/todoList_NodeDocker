const tasksModel = require('../models/tasksModel')

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
}

const createTask = async (request, response) => {
    try {
        const taskData = request.body;

        // Verifique se o objeto task e a propriedade titulo estão presentes
        if (!taskData || typeof taskData.titulo !== 'string') {
            return response.status(400).json({ error: 'Os dados da tarefa são inválidos.' });
        }

        const createdTask = await tasksModel.createTask(taskData);
        return response.status(201).json(createdTask);
    } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        return response.status(500).json({ error: 'Erro interno do servidor ao criar tarefa.' });
    }
};

const deleteTask = async (request, response) =>{
    const { id } = request.params;

    await tasksModel.deleteTask(id);
    return response.status(204).json();
}

const updateTask = async (request, response) =>{
    const { id } = request.params;
    await tasksModel.updateTask(id, request.body); //request.body é de onde vai tirar o titulo e o status

    return response.status(204).json();
}




module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}