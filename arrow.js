//Default function

function add(a,b){
    const result = a + b;

    return result;
}

const sum = add(5 , 25);

console.log(sum);

//Arrow function
const add2 = (a, b) => a + b;

const sum2 = add2(10, 10);

console.log(sum2);

const add3 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const sum3 = add3(10, 20, 30, 40);

console.log(sum3);

const multiply = (num1, num2 , num3) => num1 * num2 * num3;

const number = multiply(10, 10, 20);

console.log(number);