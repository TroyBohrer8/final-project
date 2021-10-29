import React from "react";
import { Link } from 'react-router-dom';

// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to our Hair Styling Store</h1>
      <Link to="/dashboard">Enter Store</Link>
    </div>
  );
};

export default Home;