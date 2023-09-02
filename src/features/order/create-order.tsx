// import { useState } from "react";

import { Form, useActionData, useNavigation } from "react-router-dom";
import { getCart, getTotalCartPrice } from "../cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../UI/button/button";
import EmptyCart from "../cart/empty-cart";
import LocationButton from "../../UI/location-button/location-button";
import { State } from "../../utils/types/state-types";
import fetchAddress from "../user/user-thunk";
import formatCurrency from "../../utils/helpers/format-currency";
import { getUserName } from "../user/user-slice";
import { useState } from "react";

const CreateOrder: React.FC = () => {
  const cart = useSelector(getCart)
  const [withPriority, setWithPriority] = useState(false);

  
  const navigation = useNavigation();
  const isCreating = navigation.state === "loading";
  const userName = useSelector(getUserName)

  const totalCartPrice = useSelector(getTotalCartPrice) 
  const priorityPrice = withPriority?(.2*totalCartPrice): 0;
  const totalPrice = totalCartPrice + priorityPrice
  // getting error data
  const dispatch  = useDispatch() 
  const formErrors = useActionData() as { [key: string]: string };
  const handleGetPosition = (e: React.FormEvent) => {
    console.log("going for geolocation now....");
    
    e.preventDefault()
    dispatch(fetchAddress())
  }
const {status:addressStatus,position,address,error:errorMessage} =useSelector((state:State)=>state.user)
  const isLoadingAddress = addressStatus === 'loading'
  
  if (!cart.length) return <EmptyCart />
  return (
    <div className="px-4 py-6">
      <h2 className=" text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="customer" className="sm:basis-40">First Name</label>
          <input type="text" name="customer" id="customer" required className="form-input grow" defaultValue={userName} />
         
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="phone" className="sm:basis-40">Phone number</label>
          <div className=" grow">
           
            <input type="tel" name="phone" id="phone" required className=" w-full form-input" />
          {formErrors?.phone && <p className=" text-xs rounded-md mt-2 bg-red-100 text-red-700 ">{formErrors.phone}</p>}
          </div>
        </div>

        <div className=" relative mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label htmlFor="address" className="sm:basis-40">Address</label>
          <div className=" grow">
  
            <input type="text" defaultValue={address} disabled={isLoadingAddress} name="address" id="address" required 
              className="form-input w-full" />
          {addressStatus === "error" && <p className=" text-xs rounded-md mt-2 bg-red-100 text-red-700 ">{errorMessage}</p>}
            
          </div>
          {!position.latitude && !position.longitude &&
            <span className=" flex items-center justify-center right-0 mr-2 absolute z-50">

          <LocationButton type="small" disabled={isLoadingAddress} onClick={handleGetPosition}>Get Position</LocationButton>
          </span>}
        </div>

        <div className="mb-12 flex items-center gap-5 ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            
            className=" h-6 accent-yellow-400  focus:outline-none focus:ring
            focus:ring-yellow-400 focus:ring-offset-2 w-6"
            value={`${withPriority}`}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className=" font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.latitude&&position.longitude ? JSON.stringify(position):""} />
          
          <Button disabled={isCreating || isLoadingAddress} type="primary">{isCreating ? "Placing your Order...." : `Order now for ${formatCurrency(totalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
};
// interface Request {
//   formData: () => any;
// }

export default CreateOrder;
