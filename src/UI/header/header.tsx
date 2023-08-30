import { Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <Link to={"/"}>
        <img
          className=" rounded-full w-20"
          src="/public/pizza-2.jpeg"
          alt="Hot Pizza"
        />
        <p>Hargent</p>
      </Link>
    </header>
  );
};

export default Header;
