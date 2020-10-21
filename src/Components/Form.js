import React, {useState, useEffect} from 'react'

const Form = () => {
    
    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [orignalCurrency, setOrignalCurrency] = useState("EUR");
    const [exchangedCurrency, setExchangedCurrency] = useState("EUR");

    useEffect(() => {
        
    })


    return (
        <table>
            <tbody>
              <tr>
                <th className="description">Original Currency:</th>
                <th>
                  <select>
                      <option>originalCurrency</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th className="description">Amount:</th>
                <th>
                  <input></input>
                </th>
              </tr>
              <tr>
                <th className="description">Exchanged Currency:</th>
                <th>
                    <select>
                      <option>exchangedCurrency</option>
                    </select>
                </th>
              </tr>
            </tbody>
          </table>
    )
}

export default Form
