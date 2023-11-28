import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, handleBuy }) {
  console.log(stockList, 'from stock container');
  const renderStocks = stockList.map(stock => 
    <Stock
      stock={stock}
      key={stock.id} 
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
