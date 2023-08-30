import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../../features/cart/cart-overview";
import Header from "../header/header";
import Loader from "../loader/loader";
import React from "react";

const AppLayout: React.FC = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
