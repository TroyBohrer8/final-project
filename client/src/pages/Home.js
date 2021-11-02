import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="container">
      
      <Link to="/dashboard">
        <button className="btn--home1">Products</button>
      </Link>

    </div>
  );
};

export default Home;
