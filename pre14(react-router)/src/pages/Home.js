import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navH() {
    navigate("/products");
  }
  return (
    <>
      <h2>my Home page</h2>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
      <p>
        <button onClick={navH}>Nav</button>
      </p>
    </>
  );
};

export default Home;
