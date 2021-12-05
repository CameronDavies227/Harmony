import express from "express";
 
import { 
    getAllUsers,
    updateUser,
    deleteUser,
    getUserByUsername
} from "../controllers/Users.js";

let Userrouter=express.Router()

Userrouter.get('/getAllUsers', getAllUsers);
Userrouter.post('/getUserByUsername/', getUserByUsername);
Userrouter.patch('/updateUser/:id', updateUser);
Userrouter.delete('/deleteUser/:id', deleteUser);

export default Userrouter;