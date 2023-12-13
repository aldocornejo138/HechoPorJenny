import React, { useState, useEffect } from "react";
import "./customBouquets.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useInView } from "react-intersection-observer";
import imageSlide from "../hero/data.js";
import { Logo } from "../../assets/index.js";
import Products from "./products.js";
import CartModal from "./CartModal"; // Import CartModal

const phoneNumber = "(951) 591-3297";
const phoneLink = `tel:${phoneNumber}`;

const Title = ({ title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`Title ${inView ? "zoomIn" : "zoomOut"}`}>
      <h1> {title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

const Description = ({ des }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`imageContainer ${inView ? "zoomIn" : "zoomOut"}`}
    >
      <br />
      <p>{des}</p>
    </div>
  );
};

const CustomBouquets = () => {
  const [currentState, setCurrentState] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartFixed, setIsCartFixed] = useState(false); // Add this line

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const addToCart = (title, price, imageSrc, id) => {
    const isItemInCart = cartItems.some((item) => item.title === title);

    if (!isItemInCart) {
      setCartItems([
        ...cartItems,
        { title, price: parseFloat(price), quantity: 1, imageSrc, id },
      ]);
    } else {
      alert(`${title} is already in the cart!`);
    }
  };

  const handleItemDelete = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 920;

      setIsCartFixed(window.scrollY > scrollThreshold);
    };

    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 8000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    weight: "100%",
    transition: "background-image 3s ease",
    borderRadius: "25px",
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section className="main">
      <div className="head">
        <Link
          to="/"
          className="headLogo"
          style={{ textDecoration: "none", fontSize: "10px" }}
        >
          <h1>Hecho Por Jenny</h1>
        </Link>
        <a className="headNumber" href={phoneLink}>
          {phoneNumber}
        </a>
      </div>
      <div style={bgImageStyle}></div>
      <div className="navbarItems">
        <div className="navbarLogo">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              title="Hecho Por Jenny Logo"
              width="1208"
              height="1118"
              loading="eager"
            />
          </Link>
        </div>
        <div className="navLinks">
          <div className="icon-with-text">
            <Link to="/" className="navMenu">
              <h1>Home</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="countinerStyle">
        <div style={bgImageStyle}></div>
        <div className="transparent-background"></div>
      </div>
      <Title
        title="Custom Bouquets"
        subtitle='
"Bespoke Blooms, Crafted with Passion and Precision"'
      />
      <Description des=" With over 10 years of expertise, Hecho Por Jenny is your go-to for Custom Bouquets in Southern California. Renowned for personalized and exquisite arrangements, we ensure each bouquet is a masterpiece from design to delivery. Trust us for unparalleled Custom Bouquet Maintenance, combining passion and precision. Elevate your floral experience with Hecho Por Jenny, where every bouquet tells a story of artistry and care." />
      <div
        ref={ref}
        className={`fancyContainer ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <div className="FancyTitle">
          <h1>Hecho Por Jenny</h1>
        </div>
        <div className=" svgLineContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="347"
            height="80"
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

        <div className="svgFlower">
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
              strokeWidth="3.5"
              strokeDasharray="200 300"
              strokeLinecap="round"
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
              stroke-width="4"
              stroke-dasharray="200 300"
              stroke-linecap="round"
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
      </div>

      <div
        className={`cartButton ${
          isCartFixed ? "fixed cartZoomIn" : "unfixed cartZoomOut"
        }`}
      >
        <button onClick={openCartModal}>
          Cart {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
        </button>
      </div>

      {isCartModalOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={closeCartModal}
          onItemDelete={handleItemDelete}
          onQuantityChange={handleQuantityChange} // Pass the quantity change function
        />
      )}
      <Products addToCart={addToCart} />
      <footer className="Footer">
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
    </section>
  );
};

export default CustomBouquets;
