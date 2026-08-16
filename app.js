const restaurants = require("./foodData");

const {
  addToCart,
  calculateTotal,
  createOrder
} = require("./orderService");

const {
  simulateDelivery
} = require("./deliveryService");

console.log("======================================");
console.log("       FOOD DELIVERY APPLICATION");
console.log("======================================");

console.log("\nAvailable Restaurants:");

restaurants.forEach(restaurant => {
  console.log(
    `${restaurant.id}. ${restaurant.name} - ${restaurant.location}`
  );
});

const restaurant = restaurants[0];

console.log(`\nSelected Restaurant: ${restaurant.name}`);

console.log("\nFood Menu:");

restaurant.menu.forEach(item => {
  console.log(
    `${item.id}. ${item.name} - ₹${item.price}`
  );
});

let cart = [];

addToCart(cart, restaurant.menu[0], 2);
addToCart(cart, restaurant.menu[1], 1);
addToCart(cart, restaurant.menu[2], 1);

console.log("\nCart:");

cart.forEach(item => {
  console.log(
    `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
  );
});

const priceDetails = calculateTotal(cart);

console.log(`\nSubtotal: ₹${priceDetails.subtotal}`);
console.log(`Delivery Charge: ₹${priceDetails.deliveryCharge}`);
console.log(`Total Amount: ₹${priceDetails.total}`);

const order = createOrder("Rahul", cart);

console.log("\nOrder Created Successfully!");
console.log(`Order ID: ${order.orderId}`);
console.log(`Customer: ${order.customerName}`);
console.log(`Status: ${order.status}`);

console.log("\nDelivery Simulation:");

const deliveryUpdates = simulateDelivery(order);

deliveryUpdates.forEach(update => {
  console.log(
    `Order ${update.orderId}: ${update.status}`
  );
});

console.log("\n======================================");
console.log("        ORDER DELIVERED SUCCESSFULLY");
console.log("======================================");
