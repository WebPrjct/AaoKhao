import React from "react";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className="banner">
        <Navbar/>
      <div className="banner_content">
        <div className="container">
          <div className="banner_text">
            <h3>Pizza Delivery</h3>
            <h1>KALKATIYA PIZZAA...</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              corporis eos ut ipsum similique recusandae id!
            </p>
            <div className="banner_btn">
              <a href="#" className="btn btn-smart">DELIVERY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
