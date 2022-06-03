export interface OrderInterface {
  calculateTotal(): number;
}

export const calculateTotalAmount = (order: OrderInterface) => {
  let total = order.calculateTotal();

  const discount = total * 0.1;
  total -= discount;

  const tax = total * 0.2;
  total += tax;

  return total;
};
