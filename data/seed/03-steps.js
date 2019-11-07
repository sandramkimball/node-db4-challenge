exports.seed = function(knex) {
    return knex('steps').truncate()
    .then(function() {
        return knex('steps').insert([
            { recipe_id: 1, step_number: 1, step: 'Put peanut butter on one slice of bread.'},
            { recipe_id: 1, step_number: 2, step: 'Put jelly on another slice of bread.'},
            { recipe_id: 1, step_number: 3, step: 'Squish bread together.'},
      
            { recipe_id: 2, step_number: 1, step: 'Put mayo on a slice of bread.'},
            { recipe_id: 2, step_number: 2, step: 'Stack remaining ingredients on that slice.'},
            { recipe_id: 2, step_number: 3, step: 'Put mustard on second slice and place on top.'},
      
            { recipe_id: 3, step_number: 1, step: 'Whisk eggs, milk and cinnamon together.'},
            { recipe_id: 3, step_number: 1, step: 'Whisk eggs, milk and cinnamon together.'},
            { recipe_id: 3, step_number: 3, step: 'Fry bread slice on a skillet or in a pan.'}
          ]);
    });
};