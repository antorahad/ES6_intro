// arrow function using perameter
const difference = (x,y) => x - y;

const result = difference(40,15);

console.log(result);

// arrow using single perameter

const getAge = (person) => person.age;

const personInfo = {
    pName: 'Ahad',
    age: 26,
    gender: 'male'
}

const age = getAge(personInfo);

console.log(age);


//Using without parent thesis for single perameter

const getThird = numbers => numbers[2];

const third = getThird([1,2,10,4,5]);

console.log(third);


// using no perameter in arrow function


const getPie = () => Math.PI;

const pi = getPie(); 

console.log(pi);


// large arrow function

const math = (x,y,z) => {
    const add = x + y + z;
    const mul = x * y * z;
    const result = mul - add;
    return result;
}

const calc  = math(10,10,10);

console.log(calc);