import React, { useState } from "react";

import Button from "../../UI/button/button";

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
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
        className="w-4/5 md:w-full  form-input mb-8"
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
