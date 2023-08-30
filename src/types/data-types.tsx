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
  quantity: number;
  name: string;
  totalPrice: number;
}
interface ORDER_TYPE {
  item: ORDER_ITEM_TYPE;

  isLoadingIngredients: boolean;
  ingredients: string[];
}
interface CART_ITEM {
  [ket: string]: {
    pizzaId: string;
    name: string;
    quantity: number;
    totalPrice: number;
  };
}
export type {
  POSITION_TYPE,
  COORDINATE_TYPE,
  ADDRESS_TYPE,
  MENU_ITEM,
  PIZZA_TYPE,
  ORDER_ITEM_TYPE,
  ORDER_TYPE,
  CART_ITEM
};
