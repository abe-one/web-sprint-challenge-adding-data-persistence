exports.up = function (knex) {
  knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description", 280);
      tbl.boolean("project_completed").notNullable().defaultTo(0);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 128).notNullable().unique();
      tbl.string("resource_description", 280);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 900);
      tbl.boolean("task_completed").notNullable().defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {};
