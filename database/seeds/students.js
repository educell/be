
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
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
         representative: 'Ms. Trainor',
         contactInfo: "Grandma Storey: 1(234)567-8910"
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
        representative: 'Mr. McGee',
        contactInfo: "Mrs. Waller: 1(234)567-8910 (Mother) "
      },

        {id: 3,        
        name: 'Krisha Dunn', 
        grade: 5, 
        age: 10, 
        backgroundStory:'Wants to be a firefighter when she grows up.', 
        status:'student', 
        insuranceCard: false, 
        birthCertificate: true, 
        representative: 'Mr. Charlton',
        contactInfo: "Josh Dunn: 1(234)567-8910 (Brother) "
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
        representative: 'Mrs. Cotton',
        contactInfo: "Ms. Gardener: 1(234)567-8910 (Mother) "
      },
      ]);
    });
};
