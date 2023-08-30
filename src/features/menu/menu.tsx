import MenuItem from "./menu-item";
import { PIZZA_TYPE } from "../../types/data-types";
import { getMenu } from "../../services/api-restaurant";
import { useLoaderData } from "react-router-dom";

const Menu: React.FC = () => {
  const menuData = useLoaderData() as PIZZA_TYPE[];

  return (
    <ul>
      {menuData.map((data) => (
        <MenuItem pizza={data} key={data.id} />
      ))}
    </ul>
  );
};
export const loader = async () => {
  const menu = await getMenu();
  return menu;
};
export default Menu;