
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('workers', table => {
        table
            .increments()
        table
            .string('name', 250)
            .notNullable()
        table 
            .string('notes', 1200)
        table
            .integer('admin_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('admin')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('workers')
};
