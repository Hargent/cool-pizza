import CreateUser from "../../features/user/create-user";
import React from "react";
const Home: React.FC = () => {
  return (
    <div className=" my-10 sm:my-16 text-center px-4">
      <h1 className="text-center text-xl font-semibold mb-8 md:text-3xl text-yellow-500 ">
        The best pizza.
        <br />
        <span className="">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};

export default Home;
