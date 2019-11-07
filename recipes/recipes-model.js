const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    findById,
    findSteps,
    add,
    update,
    remove
};

function getRecipes(){
    return db.select('*').from('recipes');
}

function getShoppingList(recipe_id){
    return db('recipes')
    .where()
    
};
function getInstructions(recipe_id){
    return db('recipes')
    .where()
};

function findById(id){
    return db('recipes')
    .where({id})
    .first();
}

function findSteps(id){
    return db('steps')
    .join('')
    .select()
    .where()
}

function add(thing){
    return db('recipes')
    .insert(thing)
    .then(ids=> {
        return db('recipes').where({id: ids[0]}).first();
    })
}

function update(changes, id){
    return db('recipes')
    .where({id})
    .update(changes);
}

function remove(id){
    return db('recipes')
    .where('id', id)
    .del();
}

