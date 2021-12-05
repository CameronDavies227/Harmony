import Schedule from "../models/scheduleModel.js";
 
export const getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll();
        res.json(schedules);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(schedule[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createSchedule = async (req, res) => {
    try {
        await Schedule.create(req.body);
        res.json({
            "message": "Schedule Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateSchedule = async (req, res) => {
    try {
        await Schedule.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Schedule Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteSchedule = async (req, res) => {
    try {
        await Schedule.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Schedule Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}