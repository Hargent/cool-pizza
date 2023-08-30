import AppLayout from "../UI/app-layout/app-layout";
import Cart from "../features/cart/cart";
import CreateOrder from "../features/order/create-order";
import Home from "../UI/home/home";
import Menu from "../features/menu/menu";
import Order from "../features/order/order";
import { createBrowserRouter } from "react-router-dom";
import { loader as menuLoader } from "../features/menu/menu";
import Error from "../UI/error/error";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "order/new",
        element: <CreateOrder />
      },
      {
        path: "order/:orderID",
        element: <Order />
      }
    ]
  }
]);

export default routes;
