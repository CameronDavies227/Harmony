import express from "express";
 
import { 
    getAllGroups,
    createGroup,
    getGroupById,
    updateGroup,
    deleteGroup
} from "../controllers/Groups.js";
 
let grouprouter=express.Router()

grouprouter.get('/getAllGroups', getAllGroups);
grouprouter.get('/getGroupById/:id', getGroupById);
grouprouter.post('/createGroup', createGroup);
grouprouter.patch('/updateGroup/:id', updateGroup);
grouprouter.delete('/deleteGroup/:id', deleteGroup);

export default grouprouter;