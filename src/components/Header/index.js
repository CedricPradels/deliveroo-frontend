import React from "react";

import "./Header.css";

import deliverooLogo from "../../images/deliveroo-logo.jpg";

const Header = props => {
  const { restaurant } = props;

  return (
    <header>
      <div className="firstLine">
        <img alt="Logo Deliveroo" src={deliverooLogo} />
        <h1>Deliveroo</h1>
      </div>
      <div className="restaurant">
        <div>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
        <img alt="Restaurant picture" src={restaurant.picture} />
      </div>
    </header>
  );
};

export default Header;
