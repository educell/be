const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    getStudents,
    remove
}

function find() {
    return db('workers')
}

function findById(id) {
    return db('workers')
      .where({ id })
      .first();
}

function add(worker) {
    return db('workers')
      .insert(worker, 'id')
      .then(([id]) => {
        return findById(id);
    });
}

function getStudents(workerId) {
    return db('students')
        .select('students.id', 'students.name', 'students.age', 'students.grade', 'students.backgroundStory', 'students.status', 'students.insuranceCard', 'students.insuranceExpiration', 'students.birthCertificate', 'students.specialNeeds', 'students.representative', 'students.contactInfo')
        // .select('students.id', 'students.name as studentsName', 'admin.name')
        // .join('admin', 'admin.id', 'students.admin_id')
        // .where('students.admin_id', workerId)
}



function remove(id) {
    return db('workers')
        .where('id', id)
        .del();
    }