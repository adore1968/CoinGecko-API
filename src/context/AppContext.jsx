import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export function AppContextProvider({ children }) {
  const [formText, setFormText] = useState("");
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = data.map((item) => {
        const {
          id,
          name,
          image,
          symbol,
          current_price,
          price_change_24h,
          price_change_percentage_24h,
        } = item;

        const newItem = {
          id,
          name,
          image,
          symbol,
          price: current_price,
          priceChange: price_change_24h,
          priceChangeVolume: price_change_percentage_24h,
        };
        return newItem;
      });
      setCoins(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <AppContext.Provider value={{ formText, setFormText, coins, setCoins }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
