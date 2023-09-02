import { createOrder, getOrder } from "../../services/api-restaurant";

import { CREATE_ORDER_TYPE } from "../../utils/types/data-types";
import { clearCart } from "../cart/cart-slice";
import { redirect } from "react-router-dom";
import store from "../../redux/store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const action = async ({ request }) => {
  console.log(request + "logged in action for createBrowserRouter");
  const formData = await request.formData();
  console.log(typeof formData, "the request tpe cast");

  const data = Object.fromEntries(formData);
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
    console.log(createdOrder, "final form of order created");
    
    // Do Not overuse
    store.dispatch(clearCart())

  return redirect(`/order/${createdOrder.id}`);
};
export const loader = async ({ params }) => {
  console.log(params + "logged in loader for createBrowserRouter");
  const data = await getOrder(params.orderID);
  return data;
};
export  {action}