import Groupmember from "../models/groupmemberModel.js";
 
export const getAllGroupmembers = async (req, res) => {
    try {
        const groupmembers = await Groupmember.findAll();
        res.json(groupmembers);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getGroupmemberById = async (req, res) => {
    try {
        const groupmember = await Groupmember.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(groupmember[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createGroupmember = async (req, res) => {
    try {
        await Groupmember.create(req.body);
        res.json({
            "message": "Groupmember Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateGroupmember = async (req, res) => {
    try {
        await Groupmember.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Groupmember Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteGroupmember = async (req, res) => {
    try {
        await Groupmember.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Groupmember Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}