
const json = require('./restaurants.json');
const restaurants = json.restaurants

const dictionary =  {};
/*
Save restaurants to a dictionary where name is key and restaurant object is value.
Allows for fast lookup.
*/
for(let i in restaurants) {
    dictionary[restaurants[i].name] = restaurants[i]
}

