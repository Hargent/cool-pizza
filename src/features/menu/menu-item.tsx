import Button from "../../UI/button/button";
import { MENU_ITEM } from "../../types/data-types";
import formatCurrency from "../../utils/helpers/format-currency";

function MenuItem({ pizza }: MENU_ITEM) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  console.log(id);

  return (
    <li className=" flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={` h-24 ${soldOut?" opacity-70 grayscale":""}`}/>
      <div className=" flex flex-col grow justify-between pt-0.5">
       
        <p className=" font-medium">{name}</p>
        <p className=" text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
       
        <div className=" mt-auto flex  justify-between items-center">
          {!soldOut ? <p className=" text-sm">{formatCurrency(unitPrice)}</p> : <p className=" text-sm uppercase font-medium text-stone-500 ">Sold out</p>}
        <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
