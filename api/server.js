const express = require("express");
const server = express();

// import MW
// const resourcesRouter = require('../api/resource/router');
// const projectsRouter = require('../api/project/router');
// const tasksRouter = require('../api/task/router');

server.use(express.json());
// connect global MW

// server.use('/api/projects', resourcesRouter)
// server.use('/api/projects', projectsRouter)s
// server.use('/api/projects', tasksRouter)

server.get("/", (_req, res) => {
  res.send("Server UP");
});

module.exports = server;
