import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Form from './Components/Form';
import FormResult from './Components/FormResult';

const App =() => {
  const [currencies, setCurrencies] = useState(["EUR"]);
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [orignalCurrency, setOrignalCurrency] = useState("EUR");
    const [exchangedCurrency, setExchangedCurrency] = useState("EUR");

    

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const result = await axios.get("https://api.exchangeratesapi.io/latest");
                console.log(result)
                const currenciesList = ["EUR"]

                for(let key in result.data.rates){
                    currenciesList.push(key);
                }
                
                return currenciesList;

            } catch (error) {
                window.alert(`Error with API: ${error}`)
            }
            
        }
        const newList = fetchAPI();
        setCurrencies(newList);
        
        
    }, [])
  return (
    <div id="page-container">
      <header>
        <h1>MoneySwap</h1>
      </header>
      <main>
        <FormResult />
        <Form />
        </main>
    </div>
  );
}

export default App;
