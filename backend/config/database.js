import { Sequelize } from "sequelize";
 
const db = new Sequelize('app', 'Cam', 'Camilla22&', {
    host: "localhost",
    dialect: "mysql",
});
 
export default db;