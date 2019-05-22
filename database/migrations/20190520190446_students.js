
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('students', table => {
            table
                .increments()
            table
                .string('name', 250)
                .notNullable()
            table
                .integer('age')
                .unsigned()
                .notNullable()
            table
                .integer('grade')
                .notNullable()
                .unsigned()
            table
                .text('backgroundStory', 1200)
                .notNullable()
            table
                .string('status', 250)
                .notNullable()
            table
                .boolean('insuraceCard')
                .notNullable()
            table
                .string('insuranceExpiration', 50)
            table
                .boolean('birthCertificate')
                .notNullable()
            table
                .string('specialNeeds', 1200)
            table
                .string('representative', 250)
                .notNullable()
            table
                .text('contactInfo', 1200)
                .notNullable()
        })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('students')
};
