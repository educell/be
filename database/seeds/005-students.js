
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Wil Storey',
          age: 6,
          grade: 11,
          backgroundStory: 'Ice cream will solve everything.',
          status: 'student',
          insuranceCard: true,
          insuranceExpiration: 'Nov. 2022',
          birthCertificate: true,
          representative: 'Ms. Cantu',
          contactInfo: 'Grandma Storey: 1(234)567-8910',
          worker_id: 1,
          teacher_id: 2
        },
        {
          name: 'Dahlia Waller',
          age: 4,
          grade: 9,
          backgroundStory: 'Really likes ponies.',
          status: 'student',
          insuranceCard: true,
          insuranceExpiration: 'June. 2021',
          birthCertificate: true,
          representative: 'Ms. McGee',
          contactInfo: 'Mrs. Waller: 1(234)567-8910 (Mother)',
          worker_id: 1,
          teacher_id: 3
        },
        {
          name: 'Krisha Dunn',
          age: 5,
          grade: 10,
          backgroundStory: 'Wants to be a firefighter when she grows up.',
          status: 'student',
          insuranceCard: true,
          insuranceExpiration: 'Oct. 2021',
          birthCertificate: true,
          representative: 'Mr. Charlton',
          contactInfo: "Josh Dunn: 1(234)567-8910 (Brother)",
          worker_id: 2,
          teacher_id: 1
        },
        {
          name: 'Gianluca Gardner',
          age: 6,
          grade: 12,
          backgroundStory: 'Doesn\'t like dogs.', 
          status: 'student',
          insuranceCard: true,
          insuranceExpiration: 'Jan. 2023',
          birthCertificate: true,
          representative: 'Ms. Cotton',
          contactInfo: "Ms. Gardener: 1(234)567-8910 (Mother)",
          worker_id: 5,
          teacher_id: 4
        },
      ]);
    });
};
