const players = [75, 65, 67, 72, 55, 59];

const selected = players.filter(height => height % 2 === 1);

console.log(selected);


const friends = ['Rahat', 'Fahad', 'Ali', 'Kafi', 'Jakir'];

const oddFriends = friends.filter(friend => friend.length % 2 === 1);

console.log(oddFriends);