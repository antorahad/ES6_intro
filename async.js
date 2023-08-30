// Async

console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
    console.log('learning async in js');
}, 3000);
console.log(5);
console.log(6);


function ektaFunction(){
    console.log(4);
}


// Sync

const one = () => {
    console.log('a');

    two();

    console.log('c');
}

const two = () => {
    console.log('b');
}

one();




