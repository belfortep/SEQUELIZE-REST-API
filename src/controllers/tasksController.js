
import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {

    try {

        const tasks = await Task.findAll();

        return res.status(200).json(tasks);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const createTask = async (req, res) => {

    try {

        const newTask = await Task.create(req.body)

        await newTask.save();

        return res.status(201).json(newTask);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

export const deleteTask = async (req, res) => {

    try {

        const { id } = req.params

        await Task.destroy({
            where: { id }
        })

        return res.sendStatus(204);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateTask = async (req, res) => {

    try {

        const { id } = req.params;

        const task = await Task.findByPk(id);

        await task.set(req.body)

        await task.save();

        return res.status(200).json(task);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const getTask = async (req, res) => {

    try {
        const { id } = req.params;

        const task = await Task.findOne({
            where: { id },
            attributes: ['name']    //para decidir que me va a devolver
        })

        if (!task) {
            return res.status(404).send('task not found');
        }

        return res.status(200).json(task);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

