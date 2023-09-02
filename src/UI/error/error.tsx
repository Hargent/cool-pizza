import { ERROR_TYPE } from "../../utils/types/router-types";
import LinkButton from '../link-button/link-button';
import React from "react";
import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  
  const error = useRouteError() as ERROR_TYPE;
  // console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={"-1"}>&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
