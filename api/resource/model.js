const db = require("../../data/dbConfig");

exports.getAllResources = () => db("resources");

exports.insertResource = (resource) => db("resources").insert(resource);

exports.getResourceById = (id) => db("resources").where("resource_id", id);

exports.insertResource = async (resource) => {
  const newID = await db("resources").insert(resource);
  return this.getResourceById(newID);
};
