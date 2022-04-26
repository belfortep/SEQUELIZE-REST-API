import express from "express";
import morgan from "morgan";
import projectsRoutes from './routes/projectsRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use('/', projectsRoutes);
app.use('/', taskRoutes);


export default app

