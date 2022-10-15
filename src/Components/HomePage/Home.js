import React from "react";
import { Button } from "antd";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex-container">
      <div className="container">
        <div className="welcome-text">
          <h2>Welcome to </h2> <img src="icon.svg" />
        </div>
        <p>Please select an option from below</p>
        <div className="home-container-btn">
          <Link to="/register">
            <Button className="btn-block" type="primary">
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button className="btn-block" type="primary">
              Login
            </Button>
          </Link>
          <Link to="/products">
            <Button className="btn-block" type="primary">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
