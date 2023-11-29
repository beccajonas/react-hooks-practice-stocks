import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [portfolio, setPortfolio] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(data => {
        const sortedData = [...data].sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        setStockList(sortedData);
      });
  }, []);


  function handleBuy(stock) {
    setPortfolio([...portfolio, stock])
    console.log(portfolio);
  }

  function handleDelete(stock) {
    const updatedPortfolio = portfolio.filter((item) => item.id !== stock.id);
    setPortfolio(updatedPortfolio);
    console.log(updatedPortfolio);
  }

  function handleSort(sortCondition) {
    if (sortCondition === "Alphabetically") {
      const sortedData = [...stockList].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      setStockList(sortedData);

    } else if (sortCondition === "Price") {
      const sortedData = [...stockList].sort((a, b) => a.price - b.price);
      setStockList(sortedData);
    } 
  }

  function handleFilter(sortCondition) {
    console.log(sortCondition);
  if (sortCondition === "Tech") {
    const sortedData = stockList.filter(stock => stock.type === "Tech")
    setStockList(sortedData)

  } else if (sortCondition === "Sportswear") {
    const sortedData = stockList.filter(stock => stock.type === "Sportswear")
    setStockList(sortedData)

  } else if (sortCondition === "Finance") {
    const sortedData = stockList.filter(stock => stock.type === "Finance")
    setStockList(sortedData)
  }
  }

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} handleBuy={handleBuy}  />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
