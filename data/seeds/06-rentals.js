
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rentals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rentals').insert([
        {"start_date": "2019-10-28", "end_date": "2019-11-10", "total_cost": 100, "tool_id": 1, "renter_id": 1}
      ]);
    });
};
