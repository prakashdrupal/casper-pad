import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="App">
      <div className="App-text">
        <h1 className="App-text__title">Not Found</h1>
        <h2 className="App-text__body">
          The page you're looking for does not exists
        </h2>
        <Link to="/">Go to home</Link>
      </div>
    </div>
  );
}

export default NotFound;
