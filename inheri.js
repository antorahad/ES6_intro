class Vehicle {
    constructor(name, price){
        this.name = name;

        this.price = price;
    }

    move(){
        console.log('the vehicle is moving')
    }
}


class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}


class Truck extends Vehicle {
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}


const gari = new Vehicle ('Bmw', 15000000);

console.log(gari);