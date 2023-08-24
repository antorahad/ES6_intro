const products = [
    {
        id: 1, name: 'iphone', price:85000
    },

    {
        id: 2, name: 'samsung', price:65000
    },

    {
        id: 3, name: 'realme', price:25000
    }
]

const names = products.map(product => product.price);

console.log(names);

