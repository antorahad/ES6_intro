const a =  () => {
    console.log('A');
    b();

    console.log('Pum Pum Pum')
}

const b = () => {
    console.log('B');
    console.log('Scobby Doo Papa');
}

setTimeout(() => {
    console.log('Oy Dhistik Dhistik Dhistik');
}, 2000);

a();



