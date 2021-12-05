import express from "express";
 
import { 
    getAllSchedules,
    createSchedule,
    getScheduleById,
    updateSchedule,
    deleteSchedule
} from "../controllers/Schedules.js";

let schedulerouter=express.Router()

schedulerouter.get('/getAllSchedules', getAllSchedules);
schedulerouter.get('/getScheduleById/:id', getScheduleById);
schedulerouter.post('/createSchedule', createSchedule);
schedulerouter.patch('/updateSchedule/:id', updateSchedule);
schedulerouter.delete('/deleteSchedule/:id', deleteSchedule);

export default schedulerouter;