//Primitive data type

const a = 5;

const b = 'meaw meaw meaw';

const c = true;


//Non primitive data type

const numbers = [1,2,3,4,5,6];

const student = {
    id: 12,
    name: 'samsu',
    class: 14
}




console.log(typeof a);
console.log(typeof b);
console.log(typeof numbers);
console.log(typeof student);
console.log(typeof c);



let x = 5;

let y = x;

console.log(x, y);


y = 7;

console.log(x, y);



let p = {job: 'web developer'};

let q = p;

q.job = 'frontend developer';

console.log(p, q);