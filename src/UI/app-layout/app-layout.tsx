import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../../features/cart/cart-overview";
import Header from "../header/header";
import Loader from "../loader/loader";
import React from "react";

const AppLayout: React.FC = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";


  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">

      {isLoading && <Loader />}
      <Header />
      <div className=" overflow-scroll">

      <main className=" max-w-3xl m-auto ">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
