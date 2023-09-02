import { getTotalCartPrice, getTotalCartQuantity } from "./cart-slice";

import { Link } from "react-router-dom";
import formatCurrency from "../../utils/helpers/format-currency";
import { useSelector } from "react-redux";

const CartOverview: React.FC = () => {
  const totalCartPrice = useSelector(getTotalCartPrice)
  const totalCartQuantity = useSelector(getTotalCartQuantity)
 
  if(!totalCartQuantity) return null
  return (
    <div className=" bg-stone-800 text-stone-200 uppercase p-4 sm:px-6 text-sm md:text-base flex  items-center justify-between">
      <p className=" text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{ formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to={"cart"}>Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
