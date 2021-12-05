import express from "express";
 
import { 
    getAllGroupevents,
    createGroupevent,
    getGroupeventById,
    updateGroupevent,
    deleteGroupevent
} from "../controllers/Groupevents.js";
 
let groupeventrouter=express.Router()

groupeventrouter.get('/getAllGroupevents', getAllGroupevents);
groupeventrouter.get('/getGroupeventById/:id', getGroupeventById);
groupeventrouter.post('/createGroupevent', createGroupevent);
groupeventrouter.patch('/updateGroupevent/:id', updateGroupevent);
groupeventrouter.delete('/deleteGroupevent/:id', deleteGroupevent);

export default groupeventrouter;