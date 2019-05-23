const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    getAdmins,
    update,
    remove
}

function find() {
    return db('school')
}

function findById(id) {
    return db('school')
      .where({ id })
      .first();
}

function add(school) {
    return db('school')
      .insert(school, 'id')
      .then(([id]) => {
        return findById(id);
    });
}

function getAdmins(schoolId) {
    return db('admin as a')
        .join('school as s', 's.id', 'a.school_id')
        .select('a.id', 'a.name', 'school.name')
        .where('a.school_id', schoolId)
}

function update(id, changes) {
    return db('school')
      .where({ id })
      .update(changes);
}
  
function remove(id) {
return db('school')
    .where('id', id)
    .del();
}