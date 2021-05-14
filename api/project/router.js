const express = require("express");
const router = express.Router();
const { getAllProjects, insertProject } = require("./model");

router.get("/", (_req, res, next) => {
  getAllProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  insertProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

module.exports = router;
