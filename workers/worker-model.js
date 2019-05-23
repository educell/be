const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
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