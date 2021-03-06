import React from "react";
import { useLocation } from "react-router-dom";
import "./e404.scss";
import { Link } from "react-router-dom";

const E404 = () => {
  //let location = useLocation();

  return (
    <div className="errorContainer">
      <h1 className="errorTitle">Error 404</h1>
      <div className="errorDescription">
        <p>The page you were looking for does not exist.</p>
        <p>
          Go back to <Link to="/">homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default E404;
