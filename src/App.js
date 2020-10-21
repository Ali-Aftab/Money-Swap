import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./Components/Form";
import FormResult from "./Components/FormResult";

const App = () => {
  const [currencies, setCurrencies] = useState(["EUR"]);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [orignalCurrency, setOrignalCurrency] = useState("EUR");
  const [exchangedCurrency, setExchangedCurrency] = useState("EUR");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const result = await axios.get(
          "https://api.exchangeratesapi.io/latest"
        );
        const currenciesList = ["EUR"];

        for (let key in result.data.rates) {
          currenciesList.push(key);
        }
        setCurrencies(currenciesList);
        return currenciesList;
      } catch (error) {
        window.alert(`Error with API: ${error}`);
      }
    };
    fetchAPI();
  }, []);

  if (orignalCurrency !== exchangedCurrency) {
    console.log(exchangedCurrency, orignalCurrency);
  }

  return (
    <div id="page-container">
      <header>
        <h1>MoneySwap</h1>
      </header>
      <main>
        <FormResult />
        <Form
          currencies={currencies}
          setAmount={setAmount}
          setExchangedCurrency={setExchangedCurrency}
          setOrignalCurrency={setOrignalCurrency}
        />
        <button onClick={() => console.log(orignalCurrency, exchangedCurrency)}>
          hi
        </button>
      </main>
    </div>
  );
};

export default App;
