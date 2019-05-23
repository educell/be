
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {
          name: 'Mr. Wolfe',
          school_id: 1
        },
        {
          name: 'Mrs. Harrington',
          school_id: 1
        },
        {
          name: 'Ms. Kemp',
          school_id: 2
        },
        {
          name: 'Ms. Franklin',
          school_id: 4
        },
        {
          name: 'Mr. Krause',
          school_id: 5
        },
        {
          name: 'Mr. Pennington',
          school_id: 7
        },
        {
          name: 'Mrs. Marsh',
          school_id: 7
        },
        {
          name: 'Ms. Atherton',
          school_id: 8
        },
        {
          name: 'Mrs. Robinson',
          school_id: 9
        },
      ]); 
    });
};
