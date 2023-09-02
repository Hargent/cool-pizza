import { clearCart, getCart } from "./cart-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook/reducer-hooks";

import Button from "../../UI/button/button";
import CartItem from "./cart-item";
import EmptyCart from "./empty-cart";
import LinkButton from "../../UI/link-button/link-button";
import { getUserName } from "../user/user-slice";

function Cart() {
  const cart = useAppSelector(getCart)
  const userName = useAppSelector(getUserName)
const dispatch = useAppDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  if(!cart.length) return <EmptyCart/>
  return (
    <div className=" py-3 px-4">
      <LinkButton to="/menu" >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

<ul className=" divide-y divide-stone-200 border-b mt-3 ">
  {cart.map(item=><CartItem item={item} key={item.pizzaId}/>)}
</ul>


      <div className=" mt-6 space-x-2">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        
        <Button type="secondary" onClick={handleClearCart}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
