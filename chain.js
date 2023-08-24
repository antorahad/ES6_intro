// data access

const data = [{id: 1, name: 'ghansam', address: 'dhaka'}];

console.log(data[0].address);

const data2 = {
    count : 5000,

    data : [
        {id: 1, name: 'Iphone 14 pro', price: 85000},
        {id: 2, name: 'Samsung s23 ultra', price: 80000}
    ]
}

//find the second product price
console.log(data2.data[1].price);


const user = {
    id: 12,
    name: 'Vivik',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'hidden street',
            third: 'no dorai'
        },

        city: 'gopon sohor'
    }
}

console.log(user.address.street.second);


//optional chain access
//console.log(user.address.town?.street.second);