import express from "express";
 
import { 
    getAllParticipants,
    createParticipant,
    getParticipantById,
    updateParticipant,
    deleteParticipant
} from "../controllers/Participants.js";

let participantrouter=express.Router()

participantrouter.get('/getAllParticipants', getAllParticipants);
participantrouter.get('/getParticipantById/:id', getParticipantById);
participantrouter.post('/createParticipant', createParticipant);
participantrouter.patch('/updateParticipant/:id', updateParticipant);
participantrouter.delete('/deleteParticipant/:id', deleteParticipant);

export default participantrouter;