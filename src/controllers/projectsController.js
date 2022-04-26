import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {

    try {

        const projects = await Project.findAll();

        return res.status(200).json(projects);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const createProject = async (req, res) => {

    try {

        const newProject = await Project.create(req.body)

        await newProject.save();

        return res.status(201).json(newProject);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const deleteProject = async (req, res) => {

    try {

        const { id } = req.params

        await Project.destroy({
            where: { id }
        })

        return res.sendStatus(204);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateProject = async (req, res) => {

    try {

        const { id } = req.params;


        const project = await Project.findByPk(id);

        await project.set(req.body)

        await project.save();

        return res.status(200).json(project);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const getProject = async (req, res) => {

    try {
        const { id } = req.params;

        const project = await Project.findByPk(id)

        if (!project) {
            return res.status(404).send('project not found');
        }

        return res.status(200).json(project);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const getProjectTasks = async (req, res) => {
    try {

        const { id } = req.params

        const tasks = await Task.findAll({ where: { projectId: id } })

        return res.status(200).json(tasks);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}