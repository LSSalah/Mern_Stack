class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hello ${this.name}.`);
    }
    showStats(){
        console.log(`${this.name} has ${this.strength} Strength and ${this.speed} Speed and ${this.health} health`)
    }
    drinkSake(){
        this.health += 10
        console.log(`${this.name} has drinked Sake and has ${this.health} health.`)
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();