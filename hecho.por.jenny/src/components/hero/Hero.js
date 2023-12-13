import React from "react";
import { useState, useEffect } from "react";
import imageSlide from "./data";
import "./HeroStyles.css"; // Import your CSS file
import Menu from "../menu/Menu.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 4) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    transition: "background-image 2s ease-in-out",
  };

  return (
    <div className="backgroundMain">
      <div className="countiner-style">
        <div className="transparent-background"></div>
        <div style={bgImageStyle} className="image-filter-pinkish"></div>
        <div className="description">
          <div>
            <h2>{imageSlide[currentState].title}</h2>
            <h1>{imageSlide[currentState].body}</h1>
          </div>
        </div>
        <div className="title">
          <h1>Hecho Por Jenny</h1>
        </div>

        <div className="svg-line-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="100"
            version="1.1"
          >
            <path id="textPath" d="M 10 50 H 400" fill="transparent" />
            <text className="cursive-text">
              <textPath href="#textPath">
                <animateMotion repeatCount="indefinite">
                  <mpath
                    href="#textPath"
                    keyPoints="0;1;0"
                    keyTimes="0;0.5;1"
                    dur="4s"
                  />
                </animateMotion>
                Hecho Por Jenny
              </textPath>
            </text>
          </svg>
        </div>

        <div className="svg-flower">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="40"
            version="1.1"
          >
            <path
              id="line"
              d="M 10 20 C 100 5, 150 35, 350 20"
              fill="none"
              stroke-width="3.5"
              stroke-dasharray="200 300"
              stroke-linecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="500"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>

            <path
              id="inverseLine"
              d="M 350 20 C 250 35, 200 5, 10 20"
              fill="none"
              strokeWidth="4"
              strokeDasharray="200 300"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="-500"
                to="0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <div className="semi-title">
          <h1>Couture Floral</h1>
        </div>
        <Menu />
        {/* Center the social icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/hecho.por.jenny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/hecho.por.jenny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="left-content">
              <h1>Hecho Por Jenny &copy; 2023</h1>
            </div>
            <div className="right-content">
              <a
                href="https://aldahir-cornejo-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>Site Design</h1>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Hero;
