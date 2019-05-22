
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1,
         name: 'Wil Storey', 
         grade: 6, 
         age: 11, 
         backgroundStory:'Ice cream will solve everything.', 
         status:'student', 
         insuranceCard: true, 
         insuranceExpiration: 0422, 
         birthCertificate: true, 
         representative: 'Ms. Trainor'
        },

        {id: 2, 
        name: 'Dahlia Waller', 
        grade: 4, 
        age: 9, 
        backgroundStory:'Really likes ponies.', 
        status:'student', 
        insuranceCard: true, 
        insuranceExpiration: 1024, 
        birthCertificate: true, 
        representative: 'Mr. McGee'
      },

        {id: 3,        
        name: 'Krisha Dunn', 
        grade: 5, 
        age: 10, 
        backgroundStory:'Wants to be a firefighter when she grows up.', 
        status:'student', 
        insuranceCard: false, 
        birthCertificate: true, 
        representative: 'Mr. Charlton'
      },

        {id: 4,        
        name: 'Gianluca Gardner', 
        grade: 6, 
        age: 12, 
        backgroundStory:'Doesn\'t like dogs.', 
        status:'student', 
        insuranceCard: true,
        insuranceExpiration: 0721, 
        birthCertificate: true, 
        representative: 'Mrs. Cotton'
      },
      ]);
    });
};
