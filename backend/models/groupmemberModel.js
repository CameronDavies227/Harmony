import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Groupmember = db.define('groupmembers',{
    userID:{
        type: DataTypes.INTEGER
    },    
    groupID:{
        type: DataTypes.INTEGER
    },
    moderator:{
        type: DataTypes.BOOLEAN
    }
},{
    freezeTableName: true
});
 
export default Groupmember;