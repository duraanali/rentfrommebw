const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findByRenter,
    findByOwner,
    find,
    destroy,
    update,
    addRental,
    findraw
}

function findById(id) {
    return db('rentals as r')
      .where('r.id', id)
      .join('tools as t', 't.id', 'r.tool_id')
      .select('r.id', 'r.renter_id', 't.owner_id as owner_id', 't.id as tool_id', 'r.start_date', 'r.end_date',  't.condition', 't.daily_cost', 'r.total_cost', 't.title', 't.make', 't.model', 't.description', 't.img_url');
  }

  function findByRenter(id) {
    return db('rentals as r')
    .join('tools as t', 't.id', 'r.tool_id')
      .select('r.renter_id', 'r.id as rental_id', 't.owner_id as owner_id', 't.id as tool_id', 'r.start_date', 'r.end_date', 't.condition', 't.daily_cost', 'r.total_cost', 't.title', 't.make', 't.model', 't.description', 't.img_url')
      .where('r.renter_id', id);
  }

  function findByOwner(id) {
    return db('rentals as r')
    .join('tools as t', 't.id', 'r.tool_id')
      .select('t.owner_id as owner_id', 'r.renter_id', 'r.id as rental_id', 't.id as tool_id', 'r.start_date', 'r.end_date', 't.condition', 't.daily_cost', 'r.total_cost', 't.title', 't.make', 't.model', 't.description', 't.img_url')
      .where('t.owner_id', id);
  }

  function destroy(id) {
    return db('rentals')
      .where('id', id)
      .del();
  }

  function find() {
    return db('rentals as r')
    .join('tools as t', 't.id', 'r.tool_id')
    .select('r.id', 'r.renter_id', 't.owner_id as owner_id', 't.id as tool_id', 'r.start_date', 'r.end_date',  't.daily_cost', 'r.total_cost', 't.title');
  }

  function update(id, changes) {
    return db('rentals')
      .where({ id })
      .update(changes);
  }

  function addRental(rental) {
    return db('rentals')
      .insert(rental, 'id')
      .then(ids => ({ id: ids[0] }));
  }

  function findraw() {
    return db('rentals');
  }