// import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
isValidPhone("09012134765");

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

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <form>
        <div>
          <label>First Name</label>
          <input type="text" name="customer" id="customer" required />
          <label htmlFor="customer">customer</label>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <label htmlFor="phone">phone</label>
            <input type="tel" name="phone" id="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <label htmlFor="address" className=" hidden">
              address
            </label>
            <input type="text" name="address" id="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button>Order now</button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;