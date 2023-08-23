const glass = {name: 'glass', color: 'golden', price: 120, isCleaned: true};

console.log(glass);

//getting keys
const Keys = Object.keys(glass);
console.log(Keys);

//getting values
const Values = Object.values(glass);
console.log(Values);


//getting keys and value in a pair in a array
const pair = Object.entries(glass);
console.log(pair);

// deleting object element
delete glass.isCleaned;
console.log(glass);


// deleting using destructure
const {isCleaned, ...glass2} = glass;
console.log(glass2);


//freeze stops you to add or edit value in object

/*Object.freeze(glass);

glass.source = 'bangladesh';

console.log(glass);*/

//seal

Object.seal(glass);
glass.price =  5000;

console.log(glass);
