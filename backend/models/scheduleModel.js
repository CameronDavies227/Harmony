import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Schedule = db.define('schedules',{
    userID:{
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true
});
 
export default Schedule;