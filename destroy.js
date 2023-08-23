const person = {
    pName : 'Ahad',

    age: 26,

    phone: '01632526708',

    money: 500
}


// Using object value of an object as a variable
const {phone} = person;

const {pName} = person;

const {age} = person; 

console.log(phone);

console.log(pName);

console.log(age);


//Advance
function doubleNum (a, b){
    return [a*2, b*2];
}


const [prothom, ditiyo] = doubleNum(6, 9);

console.log(prothom, ditiyo);


