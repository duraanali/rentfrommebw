
exports.up = function(knex) {
    return knex.schema
    .createTable('owners', function(owners){
        owners.increments();
        owners.string('first_name');
        owners.string('last_name');
        owners.string('email').unique().notNullable();
        owners.string('password').notNullable();
        owners.timestamps(true, true);
    })
    .createTable('renters', function(renters){
        renters.increments();
        renters.string('first_name');
        renters.string('last_name');
        renters.string('email').unique().notNullable();
        renters.string('password').notNullable();
        renters.timestamps(true, true);
    })
    .createTable('tools', function(tools){
        tools.increments();
        tools.integer('owner_id').unsigned().notNullable().references('id').inTable('owners').onDelete('CASCADE').onUpdate('CASCADE');
        tools.timestamps(true, true);
        tools.string('title').notNullable();
        tools.string('make').notNullable().defaultTo('unknown');
        tools.string('model').notNullable().defaultTo('unknown');
        tools.string('description').notNullable();
        tools.integer('condition').notNullable().defaultTo('unknown');
        tools.integer('daily_cost').unsigned().notNullable();
        tools.string('img_url').defaultTo('https://via.placeholder.com/150');
        tools.boolean('available').notNullable().defaultTo(true);
   })
    .createTable('rentals', function(rentals){
        rentals.increments();
        rentals.date('start_date').notNullable();
        rentals.date('end_date').notNullable();
        rentals.integer('total_cost').unsigned().notNullable();
        rentals.integer('tool_id').unsigned().notNullable().references('id').inTable('tools').onDelete('CASCADE').onUpdate('CASCADE');
        rentals.integer('renter_id').unsigned().notNullable().references('id').inTable('renters').onDelete('CASCADE').onUpdate('CASCADE');
    })
 };
  
   exports.down = function(knex) {
      return knex.schema.dropTableIfExists('rentals').dropTableIfExists('tools').dropTableIfExists('renters').dropTableIfExists('owners');
   };
  
