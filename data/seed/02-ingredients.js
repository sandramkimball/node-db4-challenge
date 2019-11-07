
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {ing_name: "peanut butter"}, //1
        {ing_name: "jelly"}, // 2
        {ing_name: "turkey"}, //3
        {ing_name: "swiss cheese"},
        {ing_name: "white bread"}, //5
        {ing_name: "rye bread"},
        {ing_name: "mayonaisse"}, //7
        {ing_name: "mustard"},
        {ing_name: "banana"}, //9
        {ing_name: "tomato"},
        {ing_name: "eggs"}, //11
        {ing_name: "cinnamon"},
        {ing_name: "milk"}, //13
      ]);
    });
};
