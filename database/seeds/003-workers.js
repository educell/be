
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workers').insert([
        {
          name: 'Mrs. Ferguson', 
          admin_id: '1'
        },
        {
          name: 'Mr. Kent', 
          admin_id: '1'
        },
        {
          name: 'Mr. Chambers', 
          admin_id: '2'
        },
        {
          name: 'Ms. Freeman', 
          admin_id: '2'
        },
        {
          name: 'Mrs. Stewart', 
          admin_id: '3'
        },
        {
          name: 'Mr. Moore', 
          admin_id: '3'
        },
        {
          name: 'Mr. Reid', 
          admin_id: '4'
        },
        {
          name: 'Mrs. Herrera', 
          admin_id: '5'
        },
        {
          name: 'Ms. Hopkins', 
          admin_id: '6'
        }
      ]);
    });
};
