const {
  addToCart,
  removeFromCart,
  calculateSubtotal,
  calculateDeliveryCharge,
  calculateTotal,
  createOrder
} = require("../src/orderService");

const {
  updateDeliveryStatus,
  simulateDelivery
} = require("../src/deliveryService");

describe("Food Delivery Application Testbench", () => {

  test("should add food item to cart", () => {
    const cart = [];

    addToCart(
      cart,
      {
        id: 101,
        name: "Chicken Biryani",
        price: 180
      },
      2
    );

    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(2);
  });

  test("should calculate subtotal correctly", () => {
    const cart = [
      {
        id: 101,
        name: "Chicken Biryani",
        price: 180,
        quantity: 2
      },
      {
        id: 102,
        name: "Paneer Butter Masala",
        price: 160,
        quantity: 1
      }
    ];

    expect(calculateSubtotal(cart)).toBe(520);
  });

  test("should provide free delivery for orders of ₹500 or more", () => {
    expect(calculateDeliveryCharge(600)).toBe(0);
  });

  test("should charge ₹40 delivery for orders below ₹500", () => {
    expect(calculateDeliveryCharge(300)).toBe(40);
  });

  test("should calculate complete order total", () => {
    const cart = [
      {
        id: 101,
        name: "Chicken Biryani",
        price: 180,
        quantity: 2
      },
      {
        id: 103,
        name: "Masala Dosa",
        price: 80,
        quantity: 1
      }
    ];

    const result = calculateTotal(cart);

    expect(result.subtotal).toBe(440);
    expect(result.deliveryCharge).toBe(40);
    expect(result.total).toBe(480);
  });

  test("should remove an item from cart", () => {
    const cart = [
      {
        id: 101,
        name: "Chicken Biryani",
        price: 180,
        quantity: 1
      }
    ];

    removeFromCart(cart, 101);

    expect(cart.length).toBe(0);
  });

  test("should create an order successfully", () => {
    const cart = [
      {
        id: 101,
        name: "Chicken Biryani",
        price: 180,
        quantity: 2
      }
    ];

    const order = createOrder("Rahul", cart);

    expect(order.customerName).toBe("Rahul");
    expect(order.status).toBe("Order Placed");
    expect(order.total).toBe(400);
    expect(order.orderId).toMatch(/^ORD/);
  });

  test("should update delivery status", () => {
    const order = {
      orderId: "ORD1001",
      status: "Order Placed"
    };

    updateDeliveryStatus(order, "Preparing Food");

    expect(order.status).toBe("Preparing Food");
  });

  test("should simulate complete delivery", () => {
    const order = {
      orderId: "ORD1002",
      status: "Order Placed"
    };

    const result = simulateDelivery(order);

    expect(result.length).toBe(4);
    expect(result[0].status).toBe("Order Placed");
    expect(result[3].status).toBe("Delivered");
  });

  test("should reject an empty cart", () => {
    expect(() => {
      createOrder("Rahul", []);
    }).toThrow("Cart cannot be empty");
  });

});
