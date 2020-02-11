import React, { useState } from "react";

import "./Categorie.css";

import Meal from "../Meal";

const Categorie = props => {
  const { name, meals } = props;
  const { basket, setBasket } = props.states;

  return (
    <section>
      <h2>{name}</h2>
      <div className="meals">
        {meals.map((meal, index) => {
          return (
            <Meal meal={meal} states={{ basket, setBasket }} key={index}></Meal>
          );
        })}
      </div>
    </section>
  );
};

export default Categorie;
