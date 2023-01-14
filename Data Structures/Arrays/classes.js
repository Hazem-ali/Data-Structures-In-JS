// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
// scope is what inside {   }
// context is what 'this' keyword refers to

// instantiation

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;

    }

    introduce() {
        console.log(`Hi there, I'm ${this.name}, I'm a ${this.type}`);

    }
}


class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);

    }
    play() {
        console.log(`Weeeeeeeeeeee!, I'm a ${this.type}`);
    }
}


const wizard1 = new Wizard('Mofty', 'Moftish');
const wizard2 = new Wizard('XYZ', 'ICE man');
