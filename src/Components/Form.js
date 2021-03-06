import React from "react";
import { SelectionCard } from "./SelectionCard";

const Form = (props) => {
  const {
    currencies,
    setAmount,
    setExchangedCurrency,
    setOrignalCurrency,
  } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th className="description">Original Currency:</th>
          <th>
            <SelectionCard
              currencies={currencies}
              name={"orignalCurrency"}
              changeCurrency={setOrignalCurrency}
            />
          </th>
        </tr>
        <tr>
          <th className="description">Amount:</th>
          <th>
            <input
              pattern="^\d*(\.\d{0,2})?$"
              onChange={(event) => setAmount(event.target.value)}
            ></input>
          </th>
        </tr>
        <tr>
          <th className="description">Exchanged Currency:</th>
          <th>
            <SelectionCard
              currencies={currencies}
              name={"exchangedCurrency"}
              changeCurrency={setExchangedCurrency}
            />
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Form;
