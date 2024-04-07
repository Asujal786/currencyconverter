"use client";
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [oldCurrency, setOldCurrency] = useState("AUD");
  const [newCurrency, setNewCurrency] = useState("USD");
  const [data, setData] = useState(null);
  const [amount,SetAmount]=useState(1);


  const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_tv8HB6K13FzIuEC2vBniPbLKGMGmqb5kRZkIDa9O&currencies=${newCurrency}&base_currency=${oldCurrency}`;
  
  console.log(url);
    useEffect(() => {
      const datafetch = async () => {
        try {
          const response = await axios.get(url);

          setData(response.data); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      datafetch();
    }, [oldCurrency, newCurrency]);
  

  return (
    <>
      <main className={styles.container}>
        <div className={styles.divbox}>
          <p className={styles.divboxtext}>Convert</p>
          <div className={styles.columns}>
            <div>
              <p className={styles.columntext}>Amount</p>
              <input onChange={(e)=>{SetAmount(e.target.value)} }className={styles.input} type="text" placeholder="$1.00" />
            </div>
            <div>
              <p className={styles.columntext}>From</p>
              <select
                className={styles.input}
                onChange={(e) => setOldCurrency(e.target.value)}
                value={oldCurrency}
              >
                <option value="AUD">AUD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="SEK">SEK</option>
                <option value="NZD">NZD</option>
                <option value="KRW">KRW</option>
                <option value="SGD">SGD</option>
                <option value="NOK">NOK</option>
                <option value="MXN">MXN</option>
                <option value="BRL">BRL</option>
                <option value="RUB">RUB</option>
                <option value="TRY">TRY</option>
                <option value="ZAR">ZAR</option>
                <option value="HKD">HKD</option>
              </select>
            </div>
            <div>
              <p className={styles.columntext}>To</p>
              <select
                className={styles.input}
                onChange={(e) => setNewCurrency(e.target.value)}
                value={newCurrency}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="SEK">SEK</option>
                <option value="NZD">NZD</option>
                <option value="KRW">KRW</option>
                <option value="SGD">SGD</option>
                <option value="NOK">NOK</option>
                <option value="MXN">MXN</option>
                <option value="AUD">AUD</option>
                <option value="BRL">BRL</option>
                <option value="RUB">RUB</option>
                <option value="TRY">TRY</option>
                <option value="ZAR">ZAR</option>
                <option value="HKD">HKD</option>
              </select>
            </div>
          </div>
          <div className={styles.buttondiv}>
            <button className={styles.button}>Convert</button>
          </div>
          {data && data.data && data.data[newCurrency] && data.data[newCurrency].value &&(
            <div>
              The conversion of {oldCurrency} to {newCurrency} is: {data.data[newCurrency].value * amount}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
