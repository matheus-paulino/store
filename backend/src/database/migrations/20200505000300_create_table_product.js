
exports.up = knex => knex.schema.createTable('product', table => {
    table.increments('id');
    table.string('product_name').notNullable();
    table.string('product_description').notNullable();
    table.decimal('product_price').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('product');
