class BakedGood {
    constructor(price, calories, name){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }

    sell(){
        console.log(`Selling ${this.name} for ${this.price}`);
    }
}

module.exports = BakedGood;