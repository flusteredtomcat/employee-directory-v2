import express from "express";
import employees, { addemployee, getEmployee } from "../db/employees.js";

const router = express.Router();

//url /employees/
router
  .route("/")
  .get((req, res) => {
    res.send(employees);
  })
  .post((req, res) => {
    if (!req.body) {
      return res.status(400).send("Request must have a body");
    }

    const { name, type } = req.body;
    if (!name || !type) {
      return res.status(400).send("New employee must have a name");
    }

    // add employee
    const newEmployee = addemployee(req.body);

    // send response with new employee
    res.status(201).send(newEmployee);
  });

//url //employees/:id
router.route("/:id").get((req, res) => {
  const { id } = req.params;

  const singleEmployee = getEmployeeById(id);

  if (!singleEmployee) {
    return res.send(`No employees with the id of ${id}`);
  }

  res.send(singleEmployee);
});

router.route("/employees/random").get((req, res) => {
  const { name } = req.params;

  let randomEmployee = employees[Math.floor(Math.random() * employees.length)];

  if (!randomEmployee) {
    return res.send(`No random employee.`);
  }

  res.send(randomEmployee);
});

export default router;
