import { OrderInterface } from './calculate-total-amount';

export class Order implements OrderInterface {
  calculateTotal(): number {
    return 100;
  }
}
