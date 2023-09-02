import { ActionFunction, LoaderFunction, redirect } from "react-router-dom";
import { createOrder, getOrder } from "../../services/api-restaurant";

import { CREATE_ORDER_TYPE } from "../../utils/types/data-types";
import { clearCart } from "../cart/cart-slice";
import store from "../../redux/store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const action:ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData) as {[key:string]:string}

  const errors = {} as { [key: string]: string };
  if (!isValidPhone(data.phone)) {
    errors.phone =
      "Please provide your valid phone number. We might need it to contact you.";
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true"
  } as CREATE_ORDER_TYPE;
 
  const createdOrder = await createOrder(newOrder);
    
    // Do Not overuse
    store.dispatch(clearCart())

  return redirect(`/order/${createdOrder.id}`);
};
export const loader: LoaderFunction = async ({ params }) => {
if (params.orderID) {
        
        const data = await getOrder(params.orderID)
        return data
    }
    // const data = await getOrder(params?.orderID??"")
    // return data
  
};
export  {action}