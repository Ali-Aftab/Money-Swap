import React from "react";

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
            {[country]}
          </option>
        );
      })}
    </select>
  );
};
