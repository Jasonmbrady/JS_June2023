const BakedGood = require("./BakedGood");

class Cookie extends BakedGood {
    constructor(iced, cookieName, color = "None") { // function run to create an instance of the class (Object)
        super(2.99, 250, cookieName)
        this.isIced = iced;
        this.color = color;
    }

    iceCookie(newColor = "white"){
        console.log(`Applying ${newColor} icing to ${this.shape} cookie!`);
        this.color = newColor;
        this.isIced = true;
        this.calories += 25;
    }
}

module.exports = Cookie;