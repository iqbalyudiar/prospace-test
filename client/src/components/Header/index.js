import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create/company">Create a Company</Link>
          </li>
          <li>
            <Link to="/create/office">Create an Office</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default index;
