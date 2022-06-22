const express = require("express");
const sessions = require('express-session');
const cookieParser = require ("cookie-parser")
const rateLimit = require("express-rate-limit");
const cors = require('cors');
const port = 5000;
const db = require('/xampp/htdocs/Harmony/api/services/services');

const router = express.Router();
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");
const app = express();
app.use(sessions({secret: 'dead_sea',saveUninitialized: false,resave: false, cookie: {httpOnly: true,maxAge: 6000000}}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

app.use(cookieParser());

var session;

app.use(cors()); 
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});


const rateLimiterPerDay = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 1000,
  message: 'You have exceeded the 1000 requests in 24 hrs limit!', 
  headers: true,
});

const rateLimiterSerSecond = rateLimit({
  windowMs: 1000, // 24 hrs in milliseconds
  max: 1,
  message: 'You have exceeded the 1 requests per second limit!', 
  headers: true,
});



app.disable('x-powered-by');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.header("Access-Control-Allow-Methods", "OPTIONS, DELETE, PUT, POST, GET, HEAD")
  next()
})
//var sess;
//app.use((req, res, next) =>{
//  sess = req.session;
//  res.json( db.query(`INSERT INTO logs 
//(id,	IP,	session,	username,	usertype,	action 
//  VALUES 
//(${sess.id}, ${req.Origin}, ${session}, ${sess.username}, ${sess.usertype}, ${req.Method} 
//))`))})

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use( rateLimiterPerDay);
app.use( rateLimiterSerSecond);
/*
router.get('/',(req,res) => {
  sess = req.session;
  if(sess.email) {
      return res.redirect('/admin');
  }
  res.sendFile('index.html');
});*/

router.post('/login', async function(req, res, next) {
  try {
    res.json(await login(req.query.username, req.body));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }});
    




  async function login(username, user){
    var crypto;
    var hash;
    const result = await db.query(
    crypto = require('crypto'),
    hash = crypto.createHash('md5').update(user.password).digest('hex'),
    console.log(hash),
    `SELECT id, usertype
    FROM users WHERE (username = ${username}) AND (password = ${hash})`
    );

  sess = req.session;
  sess.username = user.username;
  sess.id = result.id;
  sess.usertype = result.usertype
  return{
    result,
    message
  }
};


router.get('/logout',(req,res) => {
  req.session.destroy((err) => {
      if(err) {
          return console.log(err);
      }
      res.redirect('/');
  });

});


/* POST user */
router.post('/register', async function(req, res, next) {
  console.log(req.body);  
  try {
      res.json(await create(req.body));
    } catch (err) {
      console.error(`Error while registering new user`, err.message);
      next(err);
    }
  });

  async function create(users){
    var crypto;
    var hash;
    const check = await db.query(
      `SELECT username FROM users WHERE username=(${users.username}),`
      
    );
    if (check){
      let message = 'username taken';
      return {message}
    };

    const result = await db.query(



      crypto = require('crypto'),
      hash = crypto.createHash('md5').update(users.password).digest('hex'),
      console.log(hash),
      `INSERT INTO users 
      (username, email, phone, pass, admin, createdAt, updatedAt 
      VALUES 
      (${users.username}, ${users.email}, ${users.phone}, ${hash}, ${users.admin}), `
    );
  
    let message = 'Error in registering new user';
  
    if (result.affectedRows) {
      message = 'user registered successfully';
    }
  
    return {message};
  }




/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});