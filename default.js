//This is a default perameter function

function add(num1, num2){
    const result = num1 + num2;
    return result;
}

let output = add(10, 20);

console.log(output);

//This is a function where you give a perameter a value 

function sub(num1, num2 = 15){
    const result = num1 - num2;
    return result;
}

let output2 = sub(50);
console.log(output2);


function grettings(firstName, lastName = 'Bhai'){
    const fullName = firstName + lastName;
    const grettingMessage = 'Hello' + ' ' + fullName;
    return grettingMessage;
}

let message = grettings('ahad');
console.log(message);