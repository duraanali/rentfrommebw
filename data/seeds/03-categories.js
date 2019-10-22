
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          category: "Power Tools"
        },
        {
          category: "Hand Tools"
        },
        {
          category: "Automotive"
        },
        {
          category: "Welding & Soldering"
        },
        {
          category: "Ladders & Scaffolding"
        }
      ]);
    });
};
