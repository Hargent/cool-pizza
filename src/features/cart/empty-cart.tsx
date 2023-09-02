import LinkButton from "../../UI/link-button/link-button";

const EmptyCart: React.FC = () => {
  return (
    <div className=" py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className=" font-semibold mt-7">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
};

export default EmptyCart;
