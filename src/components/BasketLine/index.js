import React, { useState } from "react";

import "./BasketLine.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BasketLine = props => {
  const { basket, setBasket } = props.states;
  const index = props.index;

  return (
    <li>
      <div className="counter">
        <button
          onClick={() => {
            const newBasket = [...basket];
            newBasket[index].quantity--;
            if (newBasket[index].quantity === 0) {
              newBasket.splice(index, 1);
            }
            setBasket(newBasket);
          }}
        >
          <FontAwesomeIcon icon="minus-circle" />
        </button>
        <span>{basket[index].quantity}</span>
        <button
          onClick={() => {
            const newBasket = [...basket];
            newBasket[index].quantity++;
            setBasket(newBasket);
          }}
        >
          <FontAwesomeIcon icon="plus-circle" />
        </button>
      </div>
      <span>{basket[index].title}</span>
      <span>{`${(basket[index].price * 100 * basket[index].quantity) /
        100} €`}</span>
    </li>
  );
};

export default BasketLine;
