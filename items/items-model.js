const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findTools,
    findToolsById,
    findToolsByRenter,
    updateTool,
    insert,
    destroy
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

function findTools() {
    return db('tools as t')
      .select('t.*')
  }

function findToolsById(id) {
    return db('tools as t')
      .select('t.*')
      .where( {'t.id': id} )
  }

  function findToolsByRenter(id) {
    return db('tools as t')
      .select('t.*')
      .where('t.renter_id', id)
  }

  function insert(tool) {

    return db("tools")
      .insert({
        ...tool
      })
  }
  
  function updateTool(id, changes) {
      return db("tools")
        .where({ id })
        .update({
          ...changes,
        });

  }
  

  function destroy(id) {
    return db('tools')
      .where('id', id)
      .del();
  }
  //  function insert(tool) {
    // return db("tools")
    //   .insert({
    //     title: tool.title,
    //     user_id: tool.user_id,
    //     description: tool.description,
    //     make: tool.make,
    //     model: tool.model,
    //     daily_cost: tool.daily_cost,
    //     available: tool.available,
    //     img_url: tool.img_url,
    //     category_id: db
    //       .select("id")
    //       .from("categories")
    //       .where("category", tool.category.toUpperCase()),
    //     condition_id: db
    //       .select("id")
    //       .from("conditions")
    //       .where("condition", tool.condition.toUpperCase())
    //   })
    //   .then(ids => {
    //     return findById(ids[0]);
    //   });

    // .update({
    //     ...toolObj,
    //     category_id: db
    //     .select("id")
    //     .from("categories")
    //     .where("category", tool.category.toUpperCase()),
    //   condition_id: db
    //     .select("id")
    //     .from("conditions")
    //     .where("condition", tool.condition.toUpperCase())
    // });