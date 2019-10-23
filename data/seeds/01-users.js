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
          "password": "$2a$08$VgTy64haCr29gafXgzNjGOn8uLIs4c4YKY6LTo0fsum2cYucuEBaa",
          "city": "Jersey City",
          "state": "NJ",
          "zip": "07306"
        },
        {
          "first_name": "Jane",
          "last_name": "Doe",
          "email": "jane@gmail.com",
          "password": "$2a$08$VgTy64haCr29gafXgzNjGOn8uLIs4c4YKY6LTo0fsum2cYucuEBaa",
          "city": "New York",
          "state": "NY",
          "zip": "10012"
        }
      ]);
    });
};