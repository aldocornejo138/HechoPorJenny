// SuccessPage.js
import React from "react";
import "./SuccessPage.css"; // Import your styles
import { Logo } from "../../assets/index.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./SuccessPage.css"; // Import your styles

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <h2>Thank You for Your Purchase!</h2>
        <p>Your payment was successful.</p>
        <p>
          We hope you enjoy your beautiful floral arrangements from Jenny Floral
          Bouquet.
        </p>
        <p>Your order will be delivered to the provided address.</p>
        <p>A receipt has been emailed to the provided address.</p>
        <img src={Logo} alt="Flower Arrangement" className="flower-image" />
        <p>For any inquiries, please contact our customer support.</p>
        <br />
        <br />
        <Link to="/" className="back-to-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
