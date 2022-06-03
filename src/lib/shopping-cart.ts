import { OrderInterface } from './calculate-total-amount';

export class ShoppingCart implements OrderInterface {
  calculateTotal(): number {
    return 100;
  }
}
