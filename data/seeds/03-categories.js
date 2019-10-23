
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('categories').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          category: "POWER TOOLS"
        },
        {
          category: "HAND TOOLS"
        },
        {
          category: "AUTOMOTIVE"
        },
        {
          category: "WELDING & SOLDERING"
        },
        {
          category: "LADDERS & SCAFFOLDING"
        }
      ]);
    // });
};
