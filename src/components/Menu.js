import React from "react";

function Menu() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about_img">
              {/* <img src="/img/pizza.jpg" alt="image" /> */}
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>Kolkata's spacial pizzaa</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              deserunt illo voluptatibus doloribus alias incidunt, aspernatur
              odit impedit. Blanditiis, alias quaerat? Accusantium!
            </p>
            <div className="about_btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
