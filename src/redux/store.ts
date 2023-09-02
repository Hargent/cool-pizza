import cartReducer from '../features/cart/cart-slice'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/user-slice'

const store = configureStore({
    reducer:{
        user: userReducer,
        cart:cartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store