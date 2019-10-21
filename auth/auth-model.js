const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUsers
};

function find() {
  return db('users');
}

function findUsers() {
    return db('users');
  }

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
    return db('users')
      .insert(user, 'id')
      .then(ids => ({ id: ids[0] }));
  }

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}