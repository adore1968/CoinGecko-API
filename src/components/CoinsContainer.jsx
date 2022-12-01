import React from "react";
import Coin from "./Coin";
import { useGlobalContext } from "../context/AppContext";

function CoinsContainer() {
  const { coins, formText } = useGlobalContext();

  const newCoins = coins.filter((item) => {
    return item.name.toLowerCase().includes(formText.toLowerCase());
  });

  return (
    <div className="flex flex-col justify-center bg-gray-700 rounded ">
      <div className="flex text-base sm:text-lg pb-2 border-b justify-between">
        <div className="flex">
          <p className="mx-2 mt-2">#</p>
          <p className="mx-2 mt-2">Coin</p>
        </div>
        <div className="flex">
          <p className="mx-2 mt-2">Price</p>
          <p className="mx-2 mt-2">PriceChange</p>
          <p className="mx-2 mt-2">24h Volume</p>
        </div>
      </div>
      {newCoins.map((item, index) => {
        return <Coin key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default CoinsContainer;
