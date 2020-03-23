import React from "react";
import { useLocation } from "react-router-dom";

const E404 = () => {
  let location = useLocation();

  return (
    <div>
      <h1>
        Error 404 
      </h1>
      <p>
        The path <code>{location.pathname}</code> does not exist
      </p>
    </div>
  );
};

export default E404;
