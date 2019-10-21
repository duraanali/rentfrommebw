
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tools').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {
          "user_id": 1,
          "title": "Hammer for Rent",
          "description": "a really good hammer",
          "make": "hammer co",
          "model": "hammer9000",
          "condition_id": 1,
          "category_id": 1,
          "daily_cost": 25,
          "available": true,
          "img_url": "img.com/img"
      },
      ]);
    });
};
