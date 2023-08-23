const numbers = [1, 6, 8, 4];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// for of loop can used in array or string but not can not be used in object

for(const num of numbers){
    console.log(num);
}

const raja =  'Sami choti chondro chodonbaj';

for(const char of raja){
    console.log(char);
}

const glass = {name: 'glass', color: 'golden', price: 120, isCleaned: true};

for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}

