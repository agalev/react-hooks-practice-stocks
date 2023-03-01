import Stock from "./Stock";

export default function StockContainer({stocks, handleBuy}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock id={stock.id} key={stock.id} stock={stock} handleBuy={handleBuy} />)}
    </div>
  );
}
