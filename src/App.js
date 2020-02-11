import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Categorie from "./components/Categorie";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlusCircle, faMinusCircle);

const App = () => {
  const [deliverooData, setDeliverooData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [basket, setBasket] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-ced.herokuapp.com/");

    setDeliverooData(response.data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const computeSubTotal = () => {
    let newSubTotal = 0;
    for (let i = 0; i < basket.length; i++) {
      const price = basket[i].price * 100;
      newSubTotal = newSubTotal + price * basket[i].quantity;
    }

    setSubTotal(newSubTotal / 100);
  };

  useEffect(() => {
    computeSubTotal();
  }, [basket]);

  return (
    <>
      <Header restaurant={loaded && deliverooData.restaurant}></Header>
      <main>
        <div>
          {loaded &&
            deliverooData.categories.map((categorie, index) => {
              if (categorie.meals.length !== 0) {
                return (
                  <Categorie
                    name={categorie.name}
                    meals={categorie.meals}
                    states={{ basket, setBasket }}
                    key={index}
                  ></Categorie>
                );
              }
            })}
        </div>
        <Basket states={{ basket, setBasket, subTotal }}></Basket>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
