
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "first_name": "Jessica",
          "last_name": "Qwerty",
          "email": "jessica@gmail.com",
          "password": "qwerty",
          "city": "Jersey City",
          "state": "NJ",
          "zip": "07306"
        },
      ]);
    });
};
