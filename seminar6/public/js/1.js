class Robot{
    constructor(name){
        this.name = name;
    }
    
    move(){
        console.warn(this.name + ' is moving');
    }
}

let r1 = new Robot('R1');

r1.move();
//a combat robot is a robot and has weapons

class Weapon{
    constructor(description){
        this.description = description
    }
    
    fire(){
        return `${this.description} is firing` 
    }
}

let w1 = new Weapon('pew pew laser');

class CombatRobot extends Robot {
    
    constructor(name, weapons){
        super(name);
        this.weapons = [];
    }
    
    addWeapon(weapon){
        this.weapons.push(weapon);
    }
    
    fire(){
        for(let weapon of this.weapons){
            console.warn(weapon.fire());
        }
    }
}

let r2 = new CombatRobot('R2');
r2.addWeapon(w1);
r2.move();
r2.fire();

Robot.prototype.selfDestruct = function(seconds){
    console.warn(`${this.name} will self destruct in ${seconds} seconds`);
}

r2.selfDestruct(2);