import { Link } from "react-router-dom";
import React from "react";
import SearchOrder from "../../features/order/search-order";
import UserName from "../../features/user/user-name";

const Header: React.FC = () => {
  return (
    <header className="w-full uppercase bg-yellow-500 
    px-4 py-3 border-b border-stone-200 sm:px-6 ">
      <Link
        to={"/"}
        className="flex items-center justify-between upperCase tracking-widest"
      >
        <img
          className=" rounded-full w-10"
          src="/pizza-2.jpeg"
          alt="Hot Pizza"
        />
        <SearchOrder />
        <UserName />
      </Link>
    </header>
  );
};

export default Header;
