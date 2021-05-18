const db = require("../../data/dbConfig");

const toBool = (proj) => {
  proj.project_completed = !!proj.project_completed;
  return proj;
};

exports.getAllProjects = async () => {
  const projs = await db("projects");
  return projs.map(toBool);
};

exports.getProjectById = async (id) => {
  const proj = await db("projects").where("project_id", id).first();

  return toBool(proj);
};

exports.insertProject = async (project) => {
  const newID = await db("projects").insert(project);
  return this.getProjectById(newID);
};
