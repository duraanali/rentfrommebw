const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findTools,
    findToolsById,
    findToolsByUser,
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
      .join('conditions as con', 'con.id', 't.condition_id')
      .join('categories as cat', 'cat.id', 't.category_id')
      .select('t.*', "con.condition", "cat.category")
  }

function findToolsById(id) {
    return db('tools as t')
      .join('conditions as con', 'con.id', 't.condition_id')
      .join('categories as cat', 'cat.id', 't.category_id')
      .select('t.*', "con.condition", "cat.category")
      .where( {'t.id': id} )
  }

  function findToolsByUser(id) {
    return db('tools as t')
      .join('conditions as con', 'con.id', 't.condition_id')
      .join('categories as cat', 'cat.id', 't.category_id')
      .select('t.*', "con.condition", "cat.category")
      .where('t.user_id', id)
  }

  function insert(tool) {
      const { category, condition, ...toolObj } = tool;
    return db("tools")
      .insert({
        ...toolObj,
        category_id: db
          .select("id")
          .from("categories")
          .where("category", tool.category.toUpperCase()),
        condition_id: db
          .select("id")
          .from("conditions")
          .where("condition", tool.condition.toUpperCase())
      })
  }
  
  function updateTool(id, changes) {
    const { category, condition, ...toolObj } = changes;
    return db('tools')
      .where({ id })
      .update(changes);
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