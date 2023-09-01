import { CART_ITEM_TYPE } from "./cart-types";

interface ORDER_TYPE {
  id: string;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: true;
  estimatedDelivery: string;
  cart: CART_ITEM_TYPE[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export type { ORDER_TYPE }
 ;
