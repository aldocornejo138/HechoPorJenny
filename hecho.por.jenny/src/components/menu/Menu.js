// Menu.js
import React from "react";
import "./Menu.css"; // Import your CSS file
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li>
          <Link to="./CustomBouquets">Custom Bouquets</Link>
        </li>
        <li>
          <Link to="./PartyArrangements">Party Arrangements</Link>
        </li>
        <li>
          <Link to="./ProposalSets">Proposal Set Ups</Link>
        </li>
        <li>
          <Link to="./Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
