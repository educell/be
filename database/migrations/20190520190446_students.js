
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
                .text('backgroundStory', 1200) //maybe change to string
                .notNullable()
            table
                .string('status', 250)
                .notNullable()
            table
                .boolean('insuranceCard')
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
            table
                .integer('worker_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('workers')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            table
                .integer('teacher_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('teachers')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('students')
};
