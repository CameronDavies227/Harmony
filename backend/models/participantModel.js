import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Participant = db.define('participants',{
    groupID:{
        type: DataTypes.INTEGER
    },
    memberID:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default Participant;