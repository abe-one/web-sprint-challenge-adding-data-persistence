const db = require("../../data/dbConfig");

exports.getAllResources = () => db("resources");

exports.insertResource = (resource) => db("resources").insert(resource);

exports.getResourceById = async (id) => {
  const rsc = await db("resources").where("resource_id", id).first();
  rsc.resource_completed = !!rsc.resource_completed;
  return rsc;
};

exports.insertResource = async (resource) => {
  const newID = await db("resources").insert(resource);
  return this.getResourceById(newID);
};
