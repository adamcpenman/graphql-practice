exports.up = async function(knex) {
  await knex.schema.createTable('books', table => {
    table.increments();
    table.string('title');
    table.integer('page_count');
    table.string('genre');

    table
      .integer('author_id')
      .notNullable()
      .references('id')
      .inTable('authors')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    //table.foreign('id').references('authors')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
