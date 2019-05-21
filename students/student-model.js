const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('students').select('name', 'age', 'grade', 'status' );
};

function findBy(filter) {
  return db('students').where(filter);
};

async function add(user) {
  const [id] = await db('students').insert(user);

  return findById(id);
};

function findById(id) {
  return db('students')
    .where({ id })
    .first();
};

function update (id, changes) {
    return db('students')
        .where({ id })
        .update(changes)
        .then(num => {
            if(num > 0) {
                return findById(id)
            } else {
                return null
            }
        })
}
  
function remove(id) {
    return db('students')
      .where({ id })
      .del();
}