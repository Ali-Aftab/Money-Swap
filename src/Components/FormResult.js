import React from "react";
import currency from "currency.js";
import symbols from "../symbols";

const FormResult = (props) => {
  const { amount, convertedAmount, orignalCurrency, exchangedCurrency } = props;
  return (
    <h3>
      {convertedAmount && amount > 0
        ? ` ${currency(amount, {
            symbol: symbols[orignalCurrency],
            precision: 2,
          }).format()} is worth ${currency(convertedAmount, {
            symbol: symbols[exchangedCurrency],
            precision: 2,
          }).format()}`
        : "⬇ Fill out the form below ⬇"}
    </h3>
  );
};

export default FormResult;
