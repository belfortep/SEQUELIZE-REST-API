import app from "./app.js";
import { sequelize } from './database/database.js'
import './models/Project.js';
import './models/Task.js';


async function main() {

    try {
        await sequelize.sync({ force: true });
        console.log('db connected')
        app.listen(3000);
        console.log('server on port 3000');
    } catch (err) {
        console.log(err);
    }
}

main()

