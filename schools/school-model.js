const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
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