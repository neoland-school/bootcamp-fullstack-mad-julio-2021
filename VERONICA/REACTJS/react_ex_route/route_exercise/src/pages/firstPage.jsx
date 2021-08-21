import React from "react";
import { Link } from "react-router-dom";

function FirtsPage() {
  return (
    <React.Fragment>
      <Link to="/login">Login</Link>
      <div>
        <h1>Hello Public Page</h1>
      </div>
    </React.Fragment>
  );
}

export default FirtsPage;
