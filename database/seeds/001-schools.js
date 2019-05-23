
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('school')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('school').insert([
        {name: 'Clearwater Kindergarten'},
        {name: 'Willow Park Secondary School'},
        {name: 'Savanna Middle School'},
        {name:'Pacific Grove Charter School'},
        {name:'Whale Gulch Secondary School'},
        {name:'Grand Mountain Middle School'},
        {name:'Eastside Elementary'},
        {name:'Deer Valley Middle School'},
        {name:'Granite Bay University'},
        {name:'Copper Cove School for Boys'},
      ]);
    });
};
