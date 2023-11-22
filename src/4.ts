


class Key {
    constructor(private signature: number) {
    }

    getSignature():number {
        return this.signature
    }

}

class Person {
    constructor(private key: Key) { }
    
    getKey():Key {
        return this.key
    }
}

abstract class House{
   protected door:boolean=false
   protected key = Key
   protected tenants:Person[]=[]
    
    comeIn(person: Person): void{
        if (this.door) {
            this.tenants.push(person)
        }
    }

    abstract openDoor(key:Key):void
    
}

class MyHouse extends House {
    constructor(public pass: Key) {
        super();
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.pass.getSignature()) {
            this.door = true;
            console.log("The door is opened.");
        } else {
            console.log("Invalid key. The door remains closed.");
        }
    }
}




const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};