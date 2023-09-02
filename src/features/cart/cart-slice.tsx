import { CART_ITEM_TYPE } from "../../utils/types/cart-types";
import { REDUCERS } from "../../utils/constants/constants";
import { State } from "../../utils/types/state-types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:{cart:CART_ITEM_TYPE[]} = {
    cart: [],
    // priority: 
}
const cartSlice = createSlice({
    name: REDUCERS.CART,
    initialState,
    reducers: {
        addItem(state, action) {
            // const item = state.cart.find(item => item.pizzaId === action.payload?.id)

            // if (item) {
            //     cartSlice.caseReducers.increaseQuantity(item.pizzaId)
            // }
            // state.cart=[...state.cart,action.payload]
            state.cart.push(action.payload)
            
        },
        deleteItem(state, action) {
            state.cart=[...state.cart.filter(item=>item.pizzaId !== action.payload)]
        },
        increaseQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            if (!item) return
            item.quantity++
            item.totalPrice =item.quantity*item.unitPrice
        },
        decreaseQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            if (!item) return
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
            
            if (item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state,action)
            }
        },
        clearCart(state) {
            state.cart.length = 0
            // state.cart = []
        },
    }
})
const getCart =((state:State)=>state.cart.cart)
const getTotalCartPrice = (state: State) => state.cart.cart.reduce((acc, item) => (acc) + item.totalPrice, 0)
const getCurrentQuantityById =(id:number) =>(state:State)=> state.cart.cart.find(( item) =>item.pizzaId === id)?.quantity??0
const getTotalCartQuantity = (state: State) => state.cart.cart.reduce((acc, item) => (acc) + item.quantity, 0)

// checkout reselect library
export { getTotalCartQuantity, getTotalCartPrice,getCart,getCurrentQuantityById }
export const {addItem, deleteItem ,increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer