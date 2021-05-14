const db = require("../../data/dbConfig");

exports.getAllProjects = () => db("projects");

exports.getProjectById = async (id) => {
  const proj = await db("projects").where("project_id", id);
  proj.project_completed = !!proj.project_completed;
  return proj;
};

exports.insertProject = async (project) => {
  const newID = await db("projects").insert(project);
  return this.getProjectById(newID);
};
