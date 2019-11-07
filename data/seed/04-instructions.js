
exports.seed = function(knex) {
    return knex('instructions').truncate()
      .then(function () {
        return knex('instructions').insert([
          {recipe_id: 1, ing_id: 1},
          {recipe_id: 1, ing_id: 2},
          {recipe_id: 1, ing_id: 5},
          {recipe_id: 1, ing_id: 9},

          {recipe_id: 2, ing_id: 3},
          {recipe_id: 2, ing_id: 4},
          {recipe_id: 2, ing_id: 6},
          {recipe_id: 2, ing_id: 7},
          {recipe_id: 2, ing_id: 8},
          {recipe_id: 2, ing_id: 10},

          {recipe_id: 3, ing_id: 5},
          {recipe_id: 3, ing_id: 11},
          {recipe_id: 3, ing_id: 12},
          {recipe_id: 3, ing_id: 13},

        ]);
      });
  };
  