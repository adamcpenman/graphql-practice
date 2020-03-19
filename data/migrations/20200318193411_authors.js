exports.up = async function(knex) {
  await knex.schema.createTable('authors', table => {
    table.increments('id');
    table.string('first_name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('authors');
};
