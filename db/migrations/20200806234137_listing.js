exports.up = function (knex, Promise) {
  return knex.schema.createTable('listing', table => {
    table.uuid('id').notNullable().primary();
    table.string('title').notNullable();
    table.string('address1').notNullable();
    table.string('address2');
    table.string('city').notNullable();
    table.string('province').notNullable();
    table.text('description').notNullable();
    table.float('longitude').notNullable();
    table.float('latitude').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('listing');
};
