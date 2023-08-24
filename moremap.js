const numbers = [4, 8, 12, 7, 3];

const result = numbers.map(num => num * 2);

console.log(result);


const result2 = numbers.map(num => num + 5);

console.log(result2);

const result3 = numbers.map(num => num / 2);

console.log(result3);

const friends = ['Rahat', 'Fahad', 'Ali', 'Kafi', 'Jakir'];

const length = friends.map(friend => friend.length);

console.log(length);

const firstLetter = friends.map(friend => friend[0]);

console.log(firstLetter);