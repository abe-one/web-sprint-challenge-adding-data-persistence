const db = require("../../data/dbConfig");

exports.getAllProjects = () => db("projects");

exports.getProjectById = (id) => db("projects").where("project_id", id);

exports.insertProject = async (project) => {
  const newID = await db("projects").insert(project);
  return this.getProjectById(newID);
};
