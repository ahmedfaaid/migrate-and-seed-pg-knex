exports.up = function (knex) {
  return knex.schema.createTable('image', table => {
    table.uuid('id').notNullable().primary();
    table.string('filename').notNullable();
    table.string('mimetype').notNullable();
    table.string('path').notNullable();
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('image');
};
