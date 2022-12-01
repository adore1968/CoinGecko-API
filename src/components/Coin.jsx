import React from "react";

function Coin({ item, index }) {
  return (
    <div>
      <div>
        <p>{index + 1}</p>
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
        <p>{item.symbol}</p>
      </div>
      <div>
        <p>{item.price}</p>
        <h5>{item.priceChange}</h5>
        <p>{item.priceChangeVolume}</p>
      </div>
    </div>
  );
}

export default Coin;
