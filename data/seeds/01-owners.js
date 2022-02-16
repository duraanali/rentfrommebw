exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('users').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {
          "first_name": "Jessica",
          "last_name": "Qwerty",
          "email": "jessica@gmail.com",
          "password": "$2a$08$VgTy64haCr29gafXgzNjGOn8uLIs4c4YKY6LTo0fsum2cYucuEBaa",
        },
        {
          "first_name": "Jane",
          "last_name": "Doe",
          "email": "jane@gmail.com",
          "password": "$2a$08$VgTy64haCr29gafXgzNjGOn8uLIs4c4YKY6LTo0fsum2cYucuEBaa",
        }
      ]);
    // });
};