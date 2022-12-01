import React from "react";

function Coin({ item, index }) {
  return (
    <div className="flex justify-between mb-2 hover:bg-gray-600 transition-colors p-2 rounded last:mb-0">
      <div className="text-base sm:text-lg flex items-center">
        <p>{index + 1}</p>
        <img src={item.image} alt={item.name} className="w-[18px] mx-2" />
        <h4 className="mr-2">{item.name}</h4>
        <p className="uppercase text-gray-400">{item.symbol}</p>
      </div>
      <div className="text-base sm:text-lg flex">
        <p className="border-l px-2">{item.price}</p>
        <h5 className="border-x px-2">{item.priceChange}</h5>
        <p className="border-r px-2">{item.priceChangeVolume}</p>
      </div>
    </div>
  );
}

export default Coin;
