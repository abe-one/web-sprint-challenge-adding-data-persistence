const express = require("express");
const router = express.Router();
const { getAllResources, insertResource } = require("./model");

router.get("/", (req, res, next) => {
  getAllResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  insertResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

module.exports = router;
