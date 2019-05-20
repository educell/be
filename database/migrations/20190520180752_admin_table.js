
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('admin', table => {
    table
        .increments()
    table
        .string('name', 250)
        .notNullable()
    table
        .integer('school_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('school')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('admin')
};
