import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Group = db.define('groups',{
    groupname:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Group;