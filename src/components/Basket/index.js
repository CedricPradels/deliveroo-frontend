import React, { useState } from "react";

import "./Basket.css";

import BasketLine from "../BasketLine";

const Basket = props => {
  const { basket, setBasket, subTotal } = props.states;
  return (
    <aside>
      <div className="sticky">
        <button className={subTotal === 0 && "emptyButton"}>
          Valider mon pannier
        </button>
        {subTotal === 0 ? (
          <div className="emptyBasket">Le pannier est vide</div>
        ) : (
          <div>
            <ul className="list">
              {basket.map((item, index) => {
                return (
                  <BasketLine
                    states={{ basket, setBasket }}
                    index={index}
                    key={index}
                  ></BasketLine>
                );
              })}
            </ul>
            <div className="subTotal">
              <span>Sous-total</span>
              <span>{`${subTotal.toFixed(2)} €`}</span>
            </div>

            <div className="deliveryCost">
              <span>Frais de livraison</span>
              <span>2.50 €</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{`${(subTotal + 2.5).toFixed(2)} €`}</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Basket;
