exports.up = function (knex) {
  return knex.schema
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
    })

    .createTable("project_resources", (tbl) => {
      tbl.increments("project_resource_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
