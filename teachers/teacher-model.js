const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('teachers')
}

function findById(id) {
    return db('teachers')
      .where({ id })
      .first();
}

function add(teacher) {
    return db('teachers')
      .insert(teacher, 'id')
      .then(([id]) => {
        return findById(id);
    });
}