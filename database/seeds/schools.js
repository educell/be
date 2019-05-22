
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('school')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('school').insert([
        {name: 'Beach Street Middle School'},
        {name: 'Franklin Academy'},
        {name: 'Paul j. Bellew'}
      ]);
    });
};
