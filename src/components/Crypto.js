import { useState, useEffect } from "react";
import styles from "./Crypto.module.css";

function Crypto() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [target, setTarget] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  const onSelect = (e) => {
    setTarget(e.target.options.selectedIndex);
  };
  const onChange = (e) => {
    if (e.target.value === "") {
      setValue(0);
    } else {
      setValue(parseInt(e.target.value));
    }
  };

  return (
    <div>
      <h1>Coin Converter {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <select onChange={onSelect} className={styles.select}>
            {coins.map((coin, index) => (
              <option key={coin.id} value={index}>
                {coin.name} ({coin.symbol}) ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <div>
            <span>$ </span>
            <input onChange={onChange} type="text" placeholder="USD" value={value} />
            <p>{value / coins[target].quotes.USD.price + ` ${coins[target].symbol}`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Crypto;
