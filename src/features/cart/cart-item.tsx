import { CART_ITEM } from "../../types/data-types";
import formatCurrency from "../../utils/helpers/format-currency";

const CartItem: React.FC = ({ item }: CART_ITEM) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  console.log(pizzaId);

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;
