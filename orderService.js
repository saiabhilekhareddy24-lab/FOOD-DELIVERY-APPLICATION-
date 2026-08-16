let orderCounter = 1000;

function addToCart(cart, item, quantity = 1) {
  if (quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
  }

  const existingItem = cart.find(
    cartItem => cartItem.id === item.id
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity
    });
  }

  return cart;
}

function removeFromCart(cart, itemId) {
  const index = cart.findIndex(item => item.id === itemId);

  if (index === -1) {
    throw new Error("Item not found in cart");
  }

  cart.splice(index, 1);

  return cart;
}

function calculateSubtotal(cart) {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function calculateDeliveryCharge(subtotal) {
  if (subtotal === 0) {
    return 0;
  }

  if (subtotal >= 500) {
    return 0;
  }

  return 40;
}

function calculateTotal(cart) {
  const subtotal = calculateSubtotal(cart);
  const deliveryCharge = calculateDeliveryCharge(subtotal);

  return {
    subtotal,
    deliveryCharge,
    total: subtotal + deliveryCharge
  };
}

function createOrder(customerName, cart) {
  if (!customerName) {
    throw new Error("Customer name is required");
  }

  if (cart.length === 0) {
    throw new Error("Cart cannot be empty");
  }

  const priceDetails = calculateTotal(cart);

  return {
    orderId: `ORD${++orderCounter}`,
    customerName,
    items: [...cart],
    subtotal: priceDetails.subtotal,
    deliveryCharge: priceDetails.deliveryCharge,
    total: priceDetails.total,
    status: "Order Placed"
  };
}

module.exports = {
  addToCart,
  removeFromCart,
  calculateSubtotal,
  calculateDeliveryCharge,
  calculateTotal,
  createOrder
};
