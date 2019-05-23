
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {
          name: 'Mrs. Allen', 
          admin_id: '1'
        },
        {
          name: 'Mr. Mann', 
          admin_id: '1'
        },
        {
          name: 'Mr. Castillo', 
          admin_id: '2'
        },
        {
          name: 'Ms. Mcfarlane', 
          admin_id: '2'
        },
        {
          name: 'Mrs. Arnold', 
          admin_id: '3'
        },
        {
          name: 'Mr. Dillard', 
          admin_id: '3'
        },
        {
          name: 'Mr. Sutherland', 
          admin_id: '4'
        },
        {
          name: 'Mrs. Murray', 
          admin_id: '5'
        },
        {
          name: 'Ms. Ellwood', 
          admin_id: '6'
        }
      ]);
    });
};
