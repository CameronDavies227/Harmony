import Groupevent from "../models/groupeventModel.js";
 
export const getAllGroupevents = async (req, res) => {
    try {
        const groupevents = await Groupevent.findAll();
        res.json(groupevents);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getGroupeventById = async (req, res) => {
    try {
        const event = await Groupevent.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(groupevent[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createGroupevent = async (req, res) => {
    try {
        await Groupevent.create(req.body);
        res.json({
            "message": "Groupevent Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateGroupevent = async (req, res) => {
    try {
        await Groupevent.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Groupevent Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteGroupevent = async (req, res) => {
    try {
        await Groupevent.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Groupevent Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}