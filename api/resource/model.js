const db = require("../../data/dbConfig");

exports.getAllResources = () => db("resources");

exports.getResourceById = (id) =>
  db("resources").where("resource_id", id).first();

exports.insertResource = async (resource) => {
  const newID = await db("resources").insert(resource);
  return this.getResourceById(newID);
};
