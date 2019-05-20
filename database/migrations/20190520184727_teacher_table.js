
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('teachers', table => {
        table
            .increments()
        table
            .string('name', 250)
            .notNullable()
        table
            .text('notes', 1200)
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
  return knex.scema 
    .dropTableIfExists('teachers')
};