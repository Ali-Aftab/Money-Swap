import React from "react";

export const SelectionCard = (props) => {
  const { currencies, name } = props;
  return (
    <select name={name}>
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
