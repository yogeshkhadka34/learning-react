import React from "react";
import "./acmeWebDesign.css";
// import Background from "./assets/backgroun.jpg";
import Html from "./assets/html5.png";
import Css from "./assets/css3.png";
// import Home from "./Home";
// import Services from "./Services";
// import About from "./About";

const AcmeWebDesign = () => {
  return (
    <div>
      {/* Navbar section  */}
      <nav>
        <h2 className="navbar__logo">
          <span className="navbar__highlight">Acme </span> Web Design
        </h2>
        <div className="navbar__links">
          <a href="/Home" className="navbar__links--name">
            Home
          </a>
          <a href="/About" className="navbar__links--name">
            About
          </a>
          <a href="/Services" className="navbar__links--name">
            Services
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="wrapper">
        <h1>Affordable Professional Websites</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus,
          elit lobortis gravida feugiat.ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla luctus, elit
        </p>
      </section>
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <input type="text" />
        <button>Subscribe</button>
      </div>

      {/* Features */}
      <section className="features">
        <div className="features__section">
          <img src={Html} alt="Html" />
          <h3>Html5 Markup</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus, elit lobortis gravida feugiat.
          </p>
        </div>

        <div className="features__section">
          <img src={Css} alt="CSS" />
          <h3>CSS3 Styling</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus, elit lobortis gravida feugiat.
          </p>
        </div>

        <div className="features__section">
          <img src={Html} alt="Html" />
          <h3>Html5 Markup</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus, elit lobortis gravida feugiat.
          </p>
        </div>
      </section>

      <footer>
        <h3>Acme Web Design, Copyright © 2022</h3>
      </footer>
    </div>
  );
};
export default AcmeWebDesign;
