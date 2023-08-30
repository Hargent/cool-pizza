import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { ERROR_TYPE } from "../../types/router-types";

const Error: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError() as ERROR_TYPE;
  // console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
