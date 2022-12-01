import React from "react";
import Coin from "./Coin";
import { useGlobalContext } from "../context/AppContext";

function CoinsContainer() {
  const { coins, formText } = useGlobalContext();

  const newCoins = coins.filter((item) => {
    return item.name.toLowerCase().includes(formText.toLowerCase());
  });

  return (
    <div>
      <div>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>PriceChange</p>
        <p>24h Volume</p>
      </div>
      {newCoins.map((item, index) => {
        return <Coin key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default CoinsContainer;
