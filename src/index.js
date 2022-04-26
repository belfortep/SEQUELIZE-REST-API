import app from "./app.js";
import { sequelize } from './database/database.js'


async function main() {

    try {
        await sequelize.sync();
        console.log('db connected')
        app.listen(3000);
        console.log('server on port 3000');
    } catch (err) {
        console.log(err);
    }
}

main()

