const db = require("../../data/dbConfig");

exports.getAllTasks = () => db("tasks");

exports.insertTask = (task) => db("tasks").insert(task);

exports.getTaskById = async (id) => {
  const task = await db("tasks").where("task_id", id).first();
  task.task_completed = !!task.task_completed;
  return task;
};

exports.insertTask = async (task) => {
  const newID = await db("tasks").insert(task);
  return this.getTaskById(newID);
};
