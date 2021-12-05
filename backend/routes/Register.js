import express from "express";
 
import {
    register
} from "../controllers/Users.js";

let registerroute=express.Router()

registerroute.post('/register', register);

export default registerroute;