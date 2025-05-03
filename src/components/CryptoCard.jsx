import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const CryptoCard = ({ crypto }) => {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow-md flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold">{crypto.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{crypto.symbol.toUpperCase()}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">${crypto.current_price.toLocaleString()}</p>
        <p className={isPositive ? "text-green-500" : "text-red-500"}>
          {isPositive ? <FaArrowUp /> : <FaArrowDown />} {crypto.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;