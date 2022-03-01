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
    return db('renters');
  }

function findBy(filter) {
  return db('renters').where(filter);
}

// add a new renter to the database
function add(user) {
  return db('renters')
  .insert(user, 'id')
  .then(ids => ({ id: ids[0] }));
  }



function findById(id) {
  return db('renters')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db('renters')
    .where({ id })
    .update(changes);
}

function destroy(id) {
  return db('renters')
    .where('id', id)
    .del();
}