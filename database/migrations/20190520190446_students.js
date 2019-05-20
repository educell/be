
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('students', table => {
            table
                .increments()
            table
                .string('name', 250)
                .integer('age')
                .notNullable()
            table
                .integer('grade').notNullable()
                .text('backgroundStory', 1200).notNullable()
                .string('status', 250)
                .boolean('insuraceCard').notNullable()
                .string('insuranceExpiration', 50)
                .boolean('birthCertificate').notNullable()
                .string('specialNeeds', 1200)
                .string('representative', 250).notNullable()
                .text('contactInfo', 1200).notNullable()
        })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('students')
};
