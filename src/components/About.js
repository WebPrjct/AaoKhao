import React from "react";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO KALKATIYA PIZZAA</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              deserunt illo voluptatibus doloribus alias incidunt, aspernatur
              odit impedit. Blanditiis, alias quaerat? Accusantium!
            </p>
            <div className="about_btn">
              <a href="#" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about_img">
              {/* <img src="img/pizza.jpg" alt="image" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
