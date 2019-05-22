exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users
        .increments();
  
      users
        .string('username', 250)
        .notNullable()
        .unique();
      users
        .string('password', 150)
        .notNullable();
    //    users
    //     .string('firstName', 150)
    //     .notNullable()
    //   users
    //     .string('lastName', 150)
    //     .notNullable()
    //   users
    //     .string('email', 250)
    //     .notNullable()
    //   users
    //     .string('school', 250)
    //     .notNullable()
    //    users
    //     .integer('phoneNumber')
    //     .unique()
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};