// Test ID: IIDSAT

import CartItem from "../cart/cart-item";
import { ORDER_ITEM_TYPE } from "../../types/data-types";
import calcMinutesLeft from "../../utils/helpers/calc-minutes-left";
import formatCurrency from "../../utils/helpers/format-currency";
import formatDate from "../../utils/helpers/format-date";
import { getOrder } from "../../services/api-restaurant";
import { useLoaderData } from "react-router-dom";

const Order: React.FC = () => {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const orderData = useLoaderData() as ORDER_ITEM_TYPE;
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart
  } = orderData;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(orderData, "order data received from router fetching");



  return (
    <div className=" px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className=" text-xl font-semibold">Order #{id} {status}</h2>

        <div className=" space-x-2"> 
          {priority && <span className=" bg-red-500 rounded-full py-1 px-3 uppercase font-semibold text-sm text-red-50 tracking-wide">Priority</span>}
          <span className=" bg-green-500 rounded-full py-1 px-3 uppercase font-semibold text-sm text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 py-5 px-6">
        <p className=" font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className=" text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

<ul className=" divide-y divide-stone-200 border-y">
    {cart.map(item=><CartItem item={item} key={item.pizzaId}/>)}
</ul>
      <div className=" space-y-2 bg-stone-200 px-6 py-5">
        <p className=" text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className=" text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className=" font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};
type Params = {
  orderID: string;
};
export const loader = async ({ params }: { params: Params }) => {
  const data = await getOrder(params.orderID);
  return data;
};
export default Order;
