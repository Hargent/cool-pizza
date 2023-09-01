import { CART_ITEM_TYPE } from "./cart-types";

interface POSITION_TYPE {
  coords: COORDINATE_TYPE;
}
interface COORDINATE_TYPE {
  latitude: number;
  longitude: number;
}
interface ADDRESS_TYPE {
  locality?: string;
  city?: string;
  postcode?: string;
  countryName?: string;
}
interface MENU_ITEM {
  pizza: PIZZA_TYPE;
  key: number;
}
interface PIZZA_TYPE {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

interface ORDER_ITEM_TYPE {
 
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
interface ORDER_TYPE {
  item: 
    { quantity:number, name:string, totalPrice:number }
  ;

  isLoadingIngredients: boolean;
  ingredients: string[];
}
interface CREATE_ORDER_TYPE {
  address: string;
  cart: CART_ITEM[];
  customer: string;
  phone: string;
  priority: boolean;
}
interface CART_ITEM {
  
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  
  
}
export type {
  POSITION_TYPE,
  COORDINATE_TYPE,
  ADDRESS_TYPE,
  MENU_ITEM,
  PIZZA_TYPE,
  ORDER_ITEM_TYPE,
  ORDER_TYPE,
  CART_ITEM,
  CREATE_ORDER_TYPE
};
