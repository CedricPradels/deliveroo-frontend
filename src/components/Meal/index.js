import React from "react";

import "./Meal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = props => {
  const { title, description, price, picture, popular } = props.meal;
  const { basket, setBasket } = props.states;

  return (
    <article
      onClick={() => {
        const newBasket = [...basket];

        let isNotInBasket = true;
        for (let i = 0; i < basket.length; i++) {
          if (newBasket[i].title === title) {
            newBasket[i].quantity++;
            isNotInBasket = false;
          }
        }
        if (isNotInBasket) {
          newBasket.push({ title, price, quantity: 1 });
        }

        setBasket(newBasket);
      }}
    >
      <div>
        <div>
          <h3>{title}</h3>
          <p className="description">{description}</p>
        </div>
        <div>
          <span className="price">{`${price} €`}</span>
          {popular && (
            <span className="populaire">
              <FontAwesomeIcon icon="star" />
              Populaire
            </span>
          )}
        </div>
      </div>
      {picture && <img alt="meal" src={picture} />}
    </article>
  );
};

export default Meal;
