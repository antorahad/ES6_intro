function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good morning', name);
}

function greetingEvening(name){
    console.log('Good evening', name);
}

greeting(greetingHandler, 'Ahad');

greeting(greetingEvening, 'Kajal');

