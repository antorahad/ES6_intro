function sum(a, b, c){ //perameters
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(4,5,6);//arguments

console.log(total);

