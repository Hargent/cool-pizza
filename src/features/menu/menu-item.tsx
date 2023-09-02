import { CART_ITEM, MENU_ITEM } from "../../utils/types/data-types";
import { addItem, getCurrentQuantityById } from "../cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../UI/button/button";
import ButtonDelete from "../../UI/button-delete/button-delete";
import UpdateItemQuantity from "../../UI/update-item-quantity/update-item-quantity";
import formatCurrency from "../../utils/helpers/format-currency";

function MenuItem({ pizza }: MENU_ITEM) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
const dispatch = useDispatch()
  const handleAddToCart = () => {
    const newItem: CART_ITEM = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
       totalPrice: unitPrice * 1,
}
    dispatch(addItem(newItem))
  }
  
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isInCart = currentQuantity >0


  return (
    <li className=" flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={` h-24 ${soldOut?" opacity-70 grayscale":""}`}/>
      <div className=" flex flex-col grow justify-between pt-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className=" mt-auto flex  justify-between items-center">
          {!soldOut ? <p className=" text-sm">{formatCurrency(unitPrice)}</p> : <p className=" text-sm uppercase font-medium text-stone-500 ">Sold out</p>}
          {isInCart && <div className=" flex items-center gap-3 sm:gap-8">
            <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>
            <ButtonDelete pizzaId={id} /></div>}
          {!soldOut && !isInCart &&
            <Button type="small" onClick={handleAddToCart}>Add to cart</Button>
        }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
