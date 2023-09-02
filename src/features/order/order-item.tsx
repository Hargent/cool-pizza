import { ORDER_TYPE } from "../../utils/types/data-types";
import formatCurrency from "../../utils/helpers/format-currency";

function OrderItem({ item, isLoadingIngredients, ingredients }: ORDER_TYPE) {
  const { quantity, name, totalPrice } = item;
  
  console.log(isLoadingIngredients, ingredients);

  return (
    <li className=" py-3 space-y-1">
      <div className=" flex items-center justify-between gap-4 text-sm">
        <p>
          <span className=" font-bold">{quantity}&times;</span> {name}
        </p>
        
          <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>
     
      </div>
          <p className="text-sm capitalize  italic text-stone-500">{ isLoadingIngredients?"Loading...":ingredients.join(", ")}</p>
    </li>
  );
}

export default OrderItem;
