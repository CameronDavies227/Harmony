import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const User = db.define('users',{
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.INTEGER
    },
    pass:{
        type: DataTypes.STRING
    },
    admin:{
        type: DataTypes.BOOLEAN
    }
},{
    freezeTableName: true
});
 
export default User;