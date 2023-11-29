import React, {useState} from "react";

function Stock({ stock, handleBuy, handleDelete }) {

  const {name, price} = stock

  function handleClick(e) {
    if(e.target
      .parentNode
      .parentNode
      .parentNode
      .parentNode
      .className === "col-8")
    {return handleBuy(stock)}
    else (handleDelete(stock))
  }




  return (
    <div onClick={handleClick} >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
