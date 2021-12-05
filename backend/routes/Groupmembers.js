import express from "express";
 
import { 
    getAllGroupmembers,
    createGroupmember,
    getGroupmemberById,
    updateGroupmember,
    deleteGroupmember
} from "../controllers/Groupmembers.js";
 
let groupmemberrouter=express.Router()

groupmemberrouter.get('/getAllGroupmembers', getAllGroupmembers);
groupmemberrouter.get('/getGroupmemberById/:id', getGroupmemberById);
groupmemberrouter.post('/createGroupmember', createGroupmember);
groupmemberrouter.patch('/updateGroupmember/:id', updateGroupmember);
groupmemberrouter.delete('/deleteGroupmember/:id', deleteGroupmember);

export default groupmemberrouter;