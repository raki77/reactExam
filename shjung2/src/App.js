import './App.css';
import { useState, useEffect } from 'react';
import FilterableProductTable from './FilterableProductTable'; // 👈 분리된 컴포넌트 import

function App() {

  const topCoins = ['BTC', 'ETH', 'BNB', 'KLAY'];
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currentUnit, setCurrentUnit] = useState(topCoins[0]);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null); // 추가: 오류 상태 관리

  const onSelect = (e) => {
    setCurrentUnit(e.target.value);
    setValue('');
  };

  const onChange = (e) => {
    if (!e.target.value.replace(/^[1-9]\d*(\d+)?$/i, '')) {
      setValue(e.target.value);
    }
  };

  const hideDecimal = (number, length) => {
    return Math.floor(number * 10 ** length) / 10 ** length;
  };

  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
 

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('🚨 Fetch Error:', err);
        setError('데이터를 불러오지 못했습니다. 다시 시도해주세요.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>My Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <>
          {/* 📌 현재 환율 */}
          <div>
            <h2>Current Price</h2>
            {topCoins.map((elem, idx) => {
              const coin = coins.find((coin) => coin.symbol === elem);
              return (
                <p key={idx}>
                  <strong>1 {elem} =</strong>
                  <span>
                    {coin?.quotes?.USD?.price
                      ? hideDecimal(coin.quotes.USD.price, 3)
                      : 'N/A'}
                  </span>
                  <i>USD</i>
                </p>
              );
            })}
          </div>
  
          {/* 📌 가격 변환기 */}
          <div className="convertPrice">
            <h3>Convert Price</h3>
            <select onChange={onSelect} value={currentUnit}>
              {topCoins.map((elem, idx) => (
                <option key={idx}>{elem}</option>
              ))}
            </select>
            <div>
              <input
                type="text"
                value={value}
                placeholder="Enter here..."
                onChange={onChange}
              />
              <span className="unit">USD</span>
            </div>
            <div>
              <input
                type="text"
                disabled
                value={
                  value && coins.find((coin) => coin.symbol === currentUnit)
                    ? hideDecimal(
                        value /
                          coins.find((coin) => coin.symbol === currentUnit)
                            ?.quotes?.USD?.price || 1,
                        6
                      )
                    : ''
                }
              />
              <span className="unit">{currentUnit}</span>
            </div>
            <button onClick={() => setValue('')}>Clear</button>
          </div>
  
          {/* ✅ 추가: 상품 필터 컴포넌트 */}
          <div>
            <FilterableProductTable products={PRODUCTS} />
          </div>
        </>
      )}
    </div>
  ); 
}

export default App;
