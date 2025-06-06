const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "phones",
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=phone+15+Pro",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air",
        price: 1199,
        category: "laptops",
        image: "https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 3,
        name: "Airpods Pro",
        price: 249,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/f59e0b/white?text=Airpods+Pro",
        description: "Wireless earbuds with noise cancelation" 
    },
    {
        id: 4,
        name: "Samsung Galaxy s24",
        price: 899,
        category: "phones",
        image: "https://via.placeholder.com/300x200/8b5cf6/white?text=Galaxy+",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
        description: "Reliable laptop for everyday computing"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
        description: "Ergonomic wireless mouse for productivity"
    },
];

// Step 2: Creatingg our shoping cart.
// This will store all items the customer wants to buy

let cart = [];

// Step 3: Get references to HTML elements
// This connects out JS to specific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('product-grid');
const featuredProducts = document.getElementById('featured-products');

// Step 4: Utilitynction to format prices
// This will make a price look like "R99" instead of "99"

function formatPrice(price) {
    return 'R' + price.tofixed(2);
}

console.log('JavaScript loaded successfully');
console.log('We Have', products.length, 'products');