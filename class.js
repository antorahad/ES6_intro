const products = [
    {
        id: 1, name: 'iphone', price:85000
    },

    {
        id: 2, name: 'samsung', price:65000
    },

    {
        id: 3, name: 'realme', price:25000
    }
]

// class in javascript
class Product{
    country = 'Bangladesh';

    constructor(name){
        this.name = name;
    }

    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenevo = new Product('le le lembo')

console.log(lenevo);

lenevo.speak('true facts');



class Teacher {
    constructor(name, subject){
        this.name = name;

        this.subject = subject;
    }

    lecture(){
        console.log('Sir is teaching physics');
    }
}


const topon = new Teacher('Tapon sir', 'physics');

console.log(topon);