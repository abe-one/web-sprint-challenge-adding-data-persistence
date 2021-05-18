const db = require("../../data/dbConfig");

const toBool = (task) => {
  task.task_completed = !!task.task_completed;
  return task;
};

exports.getAllTasks = async () => {
  function onFunc() {
    this.on("t.project_id", "p.project_id");
  }

  const tasks = await db
    .select("t.*", "p.project_name", "p.project_description")
    .from("tasks as t")
    .join("projects as p", onFunc);
  return tasks.map(toBool);
};

exports.getTaskById = async (id) => {
  const task = await db("tasks").where("task_id", id).first();
  return toBool(task);
};

exports.insertTask = async (task) => {
  const newID = await db("tasks").insert(task);
  return this.getTaskById(newID);
};
