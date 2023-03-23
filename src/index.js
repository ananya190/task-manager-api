const express = require("express");
require("./db/mongoose"); //file will run and mongoose can connect to db
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json()); // this is to parse the incoming request bodies for json

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
