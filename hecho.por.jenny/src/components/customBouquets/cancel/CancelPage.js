// CancelPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./CancelPage.css"; // Import your styles
import Logo from "../../../assets/Logo.jpg";

const CancelPage = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-content">
        <h2>Payment Canceled</h2>
        <p>
          Were sorry to see that you have canceled your Stripe Payment. If you
          have any questions or concerns, please contact our customer support.
        </p>
        <img src={Logo} alt="Cancel Illustration" className="cancel-image" />
        <br />
        <br />
        <Link to="/" className="back-to-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
