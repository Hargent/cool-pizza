// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

import Button from "../../UI/button/button";
import { CREATE_ORDER_TYPE } from "../../types/data-types";
import { createOrder } from "../../services/api-restaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15
  }
];

const CreateOrder: React.FC = () => {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);
  const navigation = useNavigation();
  const isCreating = navigation.state === "loading";

  // getting error data
  const formErrors = useActionData() as { [key: string]: string };
  return (
    <div className="px-4 py-6">
      <h2 className=" text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="customer" className="sm:basis-40">First Name</label>
          <input type="text" name="customer" id="customer" required className="form-input grow" />
         
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="phone" className="sm:basis-40">Phone number</label>
          <div className=" grow">
           
            <input type="tel" name="phone" id="phone" required className=" w-full form-input" />
          {formErrors?.phone && <p className=" text-xs rounded-md mt-2 bg-red-100 text-red-700 ">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="address" className="sm:basis-40">Address</label>
          <div className=" grow">
  
            <input type="text" name="address" id="address" required 
            className="form-input w-full"/>
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5 ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400  focus:outline-none focus:ring
            focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className=" font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          
          <Button isCreating={isCreating} type="">{isCreating ? "Placing your Order...." : "Order now"}</Button>
        </div>
      </Form>
    </div>
  );
};
// interface Request {
//   formData: () => any;
// }
export const action = async ({ request }) => {
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
    priority: data.priority === "on"
  } as CREATE_ORDER_TYPE;

  const createdOrder = await createOrder(newOrder);
  console.log(createdOrder, "final form of order created");

  return redirect(`/order/${createdOrder.id}`);
};

export default CreateOrder;
