import React from "react";

const FormResult = (props) => {
  const { amount, convertedAmount, orignalCurrency, exchangedCurrency } = props;
  return (
    <h3>
      {convertedAmount && amount > 0
        ? ` ${orignalCurrency} ${amount} is worth ${exchangedCurrency} ${convertedAmount}`
        : "⬇ Fill out the form below ⬇"}
    </h3>
  );
};

export default FormResult;
