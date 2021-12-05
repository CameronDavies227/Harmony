import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Groupevent = db.define('groupevents',{
    groupID:{
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
 
export default Groupevent;