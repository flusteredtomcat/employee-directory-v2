import express from "express";
import employeeRouter from "./api/api.js";

const app = express();

// body-parsing middleware
app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello, employees!");
});

app.use("/employees", employeeRouter);

//catch-all error handling middleware
app.use((error, req, res, next) => {
  res.status(500).send("Database error occured");
});

export default app;
