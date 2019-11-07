
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl=> {
    tbl.increments(); //Primary Key
    tbl.string('name', 255).notNullable();
    //ingredients
    tbl
    .integer('ing_id')
    .unsigned()
    .references('id')
    .inTable('ingredients')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
  })

  .createTable('ingredients', tbl=> {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      //recipes_used_in
      tbl
      .int('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

  })
  .createTable('steps', tbl=> {
    tbl.increments();
    tbl.string('instruction', 255).notNullable();

    //recipe
    tbl
      .int('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    //ingredients
    tbl
      .int('ing_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
