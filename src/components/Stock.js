import React, {useState} from "react";

function Stock({ stock, handleBuy, }) {


  const {id, ticker, name, type, price} = stock
  console.log(handleBuy);

  function handleClick() {
    console.log('click');
    handleBuy(stock)
  }



  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
