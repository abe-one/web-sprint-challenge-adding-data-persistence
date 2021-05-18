const express = require("express");
const router = express.Router();
const { getAllTasks, insertTask } = require("./model");

router.get("/", (_req, res, next) => {
  getAllTasks()
    .then((tasks) => res.status(200).json(tasks))
    .catch(next);
});

router.post("/", (req, res, next) => {
  insertTask(req.body)
    .then((newTask) => res.status(201).json(newTask))
    .catch(next);
});

module.exports = router;
