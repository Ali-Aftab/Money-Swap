import React from "react";
import symbols from "../symbols";

export const SelectionCard = (props) => {
  const { currencies, name, changeCurrency } = props;
  const handleSelectChange = (event) => {
    changeCurrency(event.target.value);
  };

  return (
    <select name={name} onChange={(event) => handleSelectChange(event)}>
      {currencies.map((country) => {
        return (
          <option key={country} value={country}>
            {symbols[country]}
          </option>
        );
      })}
    </select>
  );
};
