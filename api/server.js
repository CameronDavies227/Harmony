const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.header("Access-Control-Allow-Methods", "OPTIONS, DELETE, PUT, POST, GET, HEAD")

  next()
})

app.use("/users", usersRouter);
app.use("/events", eventsRouter);


app.use('/login', (req, res) => {
  res.send({
    UID: 'test123'
  });
});


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