const { showAllFruits } = require('../controllers/fruitsController');
const fruitsArray = require('../fruits.json');

class FruitModel {

    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAllFruits() {
        return fruitsArray.map(f => new FruitModel(f))
    }

    static showFruit(name) {
        const fruits = fruitsArray.filter(fruit => 
            fruit.name.toLowerCase().startsWith(name.toLowerCase()))

        if(fruits.length > 0) {
            return fruits.map(f => new FruitModel(f))
        } else {
            throw "Bro, that's not even a fruit!"
        }
    }

    static create(data) {
        const newFruit = data;
        console.log(newFruit); // this is only for debugging

        newFruit["id"] = fruitsArray.length + 1;

        fruitsArray.push(newFruit);

        return new FruitModel(newFruit)
    }

    update(data) {
        const updateFruit = fruitsArray.find(fruit =>
            fruit.name.toLowerCase() === this.name.toLowerCase())
        
        if(updateFruit) {
            updateFruit.name = data.name;
            return new FruitModel(updateFruit)
        } else {
            throw "Fruit not found"
        }
    }

    delete() {
        const deleteFruit = fruitsArray.find(fruit => 
            fruit.name.toLowerCase() === this.name.toLowerCase()
        )

        if(deleteFruit) {
            const index = fruitsArray.indexOf(deleteFruit);
            fruits.splice(index, 1);
        } else {
            throw "fruit not found"
        }
    }

}

module.exports = FruitModel