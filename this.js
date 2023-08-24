class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    coding(){
        console.log(`${this.name} is coding now`);
    }

    info(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}


const person = new Person('Nur Ahad', 26);

console.log(person.age);

person.coding();

person.info();