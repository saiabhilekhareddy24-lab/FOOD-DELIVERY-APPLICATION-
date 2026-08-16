const validStatuses = [
  "Order Placed",
  "Preparing Food",
  "Out for Delivery",
  "Delivered"
];

function updateDeliveryStatus(order, status) {
  if (!validStatuses.includes(status)) {
    throw new Error("Invalid delivery status");
  }

  order.status = status;

  return order;
}

function simulateDelivery(order) {
  const statuses = [
    "Order Placed",
    "Preparing Food",
    "Out for Delivery",
    "Delivered"
  ];

  return statuses.map(status => ({
    orderId: order.orderId,
    status
  }));
}

module.exports = {
  updateDeliveryStatus,
  simulateDelivery
};
