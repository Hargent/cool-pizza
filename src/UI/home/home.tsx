import Button from "../button/button";
import CreateUser from "../../features/user/create-user";
import React from "react";
import { State } from "../../utils/types/state-types";
import { useAppSelector } from "../../redux/hook/reducer-hooks";

const Home: React.FC = () => {
  const userName = useAppSelector((state:State)=>state.user.userName)

  return (
    <div className=" my-10 sm:my-16 text-center px-4">
      <h1 className="text-center text-xl font-semibold mb-8 md:text-3xl text-yellow-500 ">
        The best pizza.
        <br />
        <span className="">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName !=="" ? <Button to="menu" type="primary">{`Checkout more pizzas, ${userName}`}</Button>:<CreateUser />}
    </div>
  );
};

export default Home;
