import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleDelete }) {

  const renderPortfolio = portfolio.map( stock=> 
    <Stock
    stock={stock}
    key={stock.id}
    handleDelete={handleDelete} 
    />)

  return (
    <div>
      <h2>My Portfolio</h2>
        {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;
