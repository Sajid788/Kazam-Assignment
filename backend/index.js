const express = require("express");
const { connection, PORT } = require("./config/db");
const { userRouter } = require("./routes/UserRoutes");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Server is running!"});
});


app.use("/api/users", userRouter);


app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DataBase");
  } catch (error) {
    console.log(`${error} is giving while connecting`);
  }
  console.log(`Listening on PORT: ${PORT}`);
});