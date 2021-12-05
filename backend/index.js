import express from "express";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import eventrouter from "./routes/Events.js";
import groupeventrouter from "./routes/Groupevents.js";
import groupmemberrouter from "./routes/Groupmembers.js";
import grouprouter from "./routes/Groups.js";
import participantrouter from "./routes/Participants.js";
import schedulerouter from "./routes/Schedules.js";
import userrouter from "./routes/Users.js";
import registerroute from "./routes/Register.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    res.header("Access-Control-Allow-Methods", "OPTIONS, DELETE, PATCH, POST, GET, HEAD")

    next()
  })

const limiter = rateLimit({
    max: 5,
    windowMs: 500,
})

const dailylimiter = rateLimit({
    max: 100,
    windowMs: 86400000,
})



app.use(limiter, function(req, res, next){
    console.log("Request ip :", req.ip)

//      console.log("Request ip :", req.admin)
//      console.log("Request ip :", req.ip)

    next()
})


app.use(express.json());
app.use('/users', userrouter);
app.use('/groupevents', groupeventrouter);
app.use('/groupmembers', groupmemberrouter);
app.use('/groups', grouprouter);
app.use('/participants', participantrouter);
app.use('/schedules', schedulerouter);
app.use('/events', eventrouter);

app.use('/register', registerroute);

app.listen(5000, () => console.log('Server running at port 5000'));