import { Sequelize } from "sequelize";
 
const db = new Sequelize('app', 'Cam', 'Cam227', {
    host: "localhost",
    dialect: "mysql",
});
 
export default db;