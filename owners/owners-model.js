const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findBy,
  findById,
  findUsers,
  update,
  destroy
};


function findUsers() {
    return db('owners');
  }

function findBy(filter) {
  return db('owners').where(filter);
}

function add(user) {
    return db('owners')
      .insert(user, 'id')
      .then(ids => ({ id: ids[0] }));
  }

function findById(id) {
  return db('owners')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db('owners')
    .where({ id })
    .update(changes);
}

function destroy(id) {
  return db('owners')
    .where('id', id)
    .del();
}