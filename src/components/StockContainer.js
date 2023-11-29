import React from "react";
import Stock from "./Stock";
import {uuid} from 'react-uuid';

function StockContainer({ stockList, handleBuy }) {
  console.log(stockList, 'from stock container');
  const renderStocks = stockList.map(stock => 
    <Stock
      stock={stock}
      id={uuid}
      handleBuy={handleBuy} 
    />)
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
