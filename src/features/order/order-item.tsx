import { ORDER_TYPE } from "../../types/data-types";
import formatCurrency from "../../utils/helpers/format-currency";

function OrderItem({ item, isLoadingIngredients, ingredients }: ORDER_TYPE) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients, ingredients);

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
