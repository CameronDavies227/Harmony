import Participant from "../models/participantModel.js";
 
export const getAllParticipants = async (req, res) => {
    try {
        const participants = await Participant.findAll();
        res.json(participants);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getParticipantById = async (req, res) => {
    try {
        const participant = await Participant.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(participant[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createParticipant = async (req, res) => {
    try {
        await Participant.create(req.body);
        res.json({
            "message": "Participant Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateParticipant = async (req, res) => {
    try {
        await Participant.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Participant Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteParticipant = async (req, res) => {
    try {
        await Participant.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Participant Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}