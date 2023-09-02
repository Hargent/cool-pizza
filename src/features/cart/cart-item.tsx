import ButtonDelete from "../../UI/button-delete/button-delete";
import { CART_ITEM } from "../../utils/types/data-types";
import UpdateItemQuantity from "../../UI/update-item-quantity/update-item-quantity";
import formatCurrency from "../../utils/helpers/format-currency";
import { getCurrentQuantityById } from "./cart-slice";
import { useSelector } from "react-redux";

type Props ={
  item: CART_ITEM,
 
}
const CartItem: React.FC<Props> = (props:Props) => {
  const { pizzaId, name, quantity, totalPrice } = props.item;

const currentQuantity =useSelector(getCurrentQuantityById(pizzaId))
  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className=" mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex justify-between items-center sm:gap-6">
        <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <ButtonDelete pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
