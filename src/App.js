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
    const fetchNewRate = async () => {
      try {
        const fetchRateDiff = await axios.get(
          `https://api.exchangeratesapi.io/latest?base=${orignalCurrency}`
        );
        const exchangeRateDiff = fetchRateDiff.data.rates[exchangedCurrency];
        const convertedTheAmount = Number(amount * exchangeRateDiff).toFixed(2);
        setConvertedAmount(convertedTheAmount);
      } catch (error) {
        window.alert("Error occured during Exchanging");
      }
    };
    fetchNewRate();
  }

  return (
    <div id="page-container">
      <header>
        <h1>MoneySwap</h1>
      </header>
      <main>
        <FormResult
          amount={amount}
          convertedAmount={convertedAmount}
          exchangedCurrency={exchangedCurrency}
          orignalCurrency={orignalCurrency}
        />
        <Form
          currencies={currencies}
          setAmount={setAmount}
          setExchangedCurrency={setExchangedCurrency}
          setOrignalCurrency={setOrignalCurrency}
        />
      </main>
    </div>
  );
};

export default App;
