import React from "react";
import { Link } from 'react-router-dom';
import '../index.css'
// import { Button } from "../components/Button";
// import { Hero } from "../components/Hero";


const Home = () => {
  return (
    <div className="container">
     
      <Link to="/dashboard">
    <button className="btn--home">
          HAIR STORE
    </button>
    </Link>
    </div>
  );
};

export default Home