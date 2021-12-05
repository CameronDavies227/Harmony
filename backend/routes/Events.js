import express from "express";
 
import { 
    getAllEvents,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent
} from "../controllers/Events.js";
 
let eventrouter=express.Router()

eventrouter.get('/getAllEvents', getAllEvents);
eventrouter.get('/getEventById/:id', getEventById);
eventrouter.post('/createEvent', createEvent);
eventrouter.patch('/updateEvent/:id', updateEvent);
eventrouter.delete('/deleteEvent/:id', deleteEvent);

export default eventrouter;