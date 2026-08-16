Food Delivery Application

A simple Food Delivery Application developed using JavaScript and Node.js. The application allows customers to view restaurants, browse food items, add items to a cart, place an order, calculate the total amount, and track delivery status.

Features
View available restaurants
View food menus
Add food items to cart
Remove food items from cart
Calculate food subtotal
Calculate delivery charge
Place an order
Generate an order ID
Track order status
Simulate delivery
Automated testing using Jest
Technologies Used
JavaScript
Node.js
Jest
Git
GitHub
Project Structure
food-delivery-app/
│
├── src/
│   ├── app.js
│   ├── foodData.js
│   ├── orderService.js
│   └── deliveryService.js
│
├── tests/
│   └── foodDelivery.test.js
│
├── package.json
├── README.md
└── .gitignore

Installation

Clone the repository:

git clone https://github.com/your-username/food-delivery-app.git


Enter the project directory:

cd food-delivery-app


Install dependencies:

npm install

Run the Application
npm start

Run the Testbench
npm test

Application Workflow
Customer
   |
   v
Select Restaurant
   |
   v
View Food Menu
   |
   v
Select Food Items
   |
   v
Add Items to Cart
   |
   v
Calculate Total
   |
   v
Place Order
   |
   v
Generate Order ID
   |
   v
Track Delivery
   |
   v
Order Delivered

Sample Order

Restaurant: Spice Hub

Item	Quantity	Price
Chicken Biryani	2	₹180
Paneer Butter Masala	1	₹160
Masala Dosa	1	₹80

Subtotal = ₹600

Delivery Charge = ₹40

Total = ₹640

Testing

The project uses Jest for unit testing.

Test cases include:

Restaurant availability
Food item availability
Adding items to cart
Removing items
Subtotal calculation
Delivery charge calculation
Final order total
Order creation
Delivery status updates
Future Enhancements
User login and registration
Online payment integration
GPS-based delivery tracking
Restaurant admin dashboard
Customer reviews and ratings
Database integration
Real-time notifications
Mobile application
Conclusion

The Food Delivery Application demonstrates the basic functionality of an online food ordering system using JavaScript and Node.js. It provides a simple foundation that can be extended into a full-stack food delivery platform.
