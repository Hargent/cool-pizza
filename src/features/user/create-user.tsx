import React, { useState } from "react";

import Button from "../../UI/button/button";
import { updateName } from "./user-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateName(username))
    navigate("menu")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className=" mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" w-2/5 active:w-4/5 focus:w-4/5 form-input mb-8 bg-stone-50"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
