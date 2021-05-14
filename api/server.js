const express = require("express");
const server = express();

const { handleErrors } = require("./middleware");

const resourcesRouter = require("../api/resource/router");
const projectsRouter = require("../api/project/router");
const tasksRouter = require("../api/task/router");

server.use(express.json());

server.use("/api/resources", resourcesRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (_req, res) => {
  res.send("Server UP");
});

server.use(handleErrors);

module.exports = server;
