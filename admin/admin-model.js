const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('admin')
}

function findById(id) {
    return db('admin')
      .where({ id })
      .first();
}

function add(admin) {
    return db('admin')
      .insert(admin, 'id')
      .then(([id]) => {
        return findById(id);
    });
}