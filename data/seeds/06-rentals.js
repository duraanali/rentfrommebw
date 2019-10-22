
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rentals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("rentals").insert([
        {
          start_date: "2019-10-28",
          end_date: "2019-11-10",
          total_cost: 65,
          tool_id: 1,
          renter_id: 2
        },
        {
          start_date: "2019-11-10",
          end_date: "2019-11-13",
          total_cost: 45,
          tool_id: 2,
          renter_id: 1
        },
        {
          start_date: "2019-11-20",
          end_date: "2019-11-22",
          total_cost: 24,
          tool_id: 3,
          renter_id: 1
        }
      ]);
    });
};
