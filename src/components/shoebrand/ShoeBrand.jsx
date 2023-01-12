import React from "react";
import "./shoebrand.css";
import shoe from "./assets/shoe.jpg";
import shoe1 from "./assets/shoe1.jpg";
import shoe2 from "./assets/shoe2.jpg";
import shoe3 from "./assets/shoe3.jpg";

const test = () => {
  return (
    <div>
      <header>
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar__logo">
            <a href="#home">
              Shoe<span className="navbar__brand--text">Brand</span>
            </a>
          </div>
          <ul className="navbar__container">
            <li>
              <a href="#home" className="navbar--links">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar--links">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar--links">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* SVG for button toggle */}
        <svg
          className="navbar--toggle"
          width="2.2rem"
          height="2.2rem"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z"
            fill="white"
          />
        </svg>
        {/* Heroarea Markup */}
        <div className="heroarea">
          <div className="heroarea__container">
            <h1 className="hero--title">
              Regain your Confidence in the court.
            </h1>
            <p className="hero--content">
              The shoe built with purpose and to take your game to the next
              level, Trust in us and improve your game.
            </p>
            <svg
              width="24"
              height="132"
              viewBox="0 0 16 132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"
                fill="black"
              />
            </svg>
          </div>
          <img src={shoe} alt="shoe" className="heroarea__image"></img>
        </div>
      </header>

      <section>
        {/* First Description */}
        <div className="features">
          <div className="features--description">
            <h3 className="features--title">Light Weight</h3>
            <p className="features--content">
              This is going to be the best shoe you ever wore. Embrace the
              greatness{" "}
            </p>
          </div>
          <div className="features--image">
            <img src={shoe1} alt="Nike Shoe" className="features--image" />
          </div>
        </div>

        {/* Second Description */}
        <div className="features--reverse">
          <div className="features--description">
            <h3 className="features--title">Light Weight</h3>
            <p className="features--content">
              This is going to be the best shoe you ever wore. Embrace the
              greatness{" "}
            </p>
          </div>
          <div className="features--image">
            <img src={shoe2} alt="Nike Shoe" className="features--image" />
          </div>
        </div>

        {/* Third Description */}
        <div className="features">
          <div className="features--description">
            <h3 className="features--title">Light Weight</h3>
            <p className="features--content">
              This is going to be the best shoe you ever wore. Embrace the
              greatness{" "}
            </p>
          </div>
          <div className="features--image">
            <img src={shoe3} alt="Nike Shoe" className="features--image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default test;
