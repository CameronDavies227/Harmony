import Group from "../models/groupModel.js";
 
export const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.json(groups);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getGroupById = async (req, res) => {
    try {
        const group = await Group.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(group[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createGroup = async (req, res) => {
    try {
        await Group.create(req.body);
        res.json({
            "message": "Group Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateGroup = async (req, res) => {
    try {
        await Group.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Group Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteGroup = async (req, res) => {
    try {
        await Group.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Group Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}