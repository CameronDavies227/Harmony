import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Event = db.define('events',{
    userID:{
        type: DataTypes.INTEGER
    },
    startTime_Date:{
        type: DataTypes.STRING
    },
    endTime_Date:{
        type: DataTypes.STRING
    },
    repeatUntil:{
        type: DataTypes.STRING
    },
    repeatFrequency:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default Event;