import { CART_ITEM_TYPE } from "./cart-types"

export type State={
  user:{
    userName: string,
    address: string,
    position: { [key: string]: number },
    error: string,
    status:string
  }
  cart: {
    cart:CART_ITEM_TYPE[]
  }
}