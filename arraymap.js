const numbers = [4, 5, 2, 8, 10];

// using arrow function in more advance way

const num = numbers.map(n => n * 2);

console.log(num);


// using arrow function

/*const doubleIt = num => num * 2;

const result = numbers.map(doubleIt);

console.log(result);*/

/*
default function method using map

function doubleIt(num){
    return num * 2;
}

const  result = numbers.map(doubleIt);

console.log(result);

*/

/* one way 

const doubled = [];

for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}


console.log(doubled);*/


