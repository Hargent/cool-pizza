import Button from "../../UI/button/button";
import { CART_ITEM } from "../../types/data-types";
import formatCurrency from "../../utils/helpers/format-currency";
type Props ={
  item:CART_ITEM
}
const CartItem: React.FC<Props> = (props:Props) => {
  const { pizzaId, name, quantity, totalPrice } = props.item;

  console.log(pizzaId);

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className=" mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex justify-between items-center sm:gap-6">
        <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
};

export default CartItem;
