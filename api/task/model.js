const db = require("../../data/dbConfig");

exports.getAllTasks = () => db("tasks");

exports.insertTask = (task) => db("tasks").insert(task);

exports.getTaskById = (id) => db("tasks").where("task_id", id);

exports.insertTask = async (task) => {
  const newID = await db("tasks").insert(task);
  return this.getTaskById(newID);
};
