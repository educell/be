
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('school', table => {
        table
            .increments();
        table
            .string('name', 250)
            .notNullable()
            .unique()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('school')
};
