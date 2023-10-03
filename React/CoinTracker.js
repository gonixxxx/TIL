import { useState, useEffect } from "react";
import * as React from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The COINS {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <input
              type="number"
              onChange={(e) => setDollar(e.target.value)}
              value={dollar === 0 ? null : dollar}
              placeholder="input the dollar"
            />
            <select onChange={(e) => setPrice(e.target.value)}>
              <option>select bitcoin</option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
          <h2>{dollar > 0 && price > 0 ? dollar / price : null}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
