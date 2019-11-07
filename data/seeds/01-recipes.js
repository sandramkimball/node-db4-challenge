
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: "PB&J"},
        {recipe_id: 2, recipe_name: "Turkey Club Sandwhich"},
        {recipe_id: 3, recipe_name: "French Toast"},
      ]);
    });
};
