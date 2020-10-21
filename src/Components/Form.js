import React from "react";
import { SelectionCard } from "./SelectionCard";

const Form = (props) => {
  const { currencies } = props;
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
            <SelectionCard currencies={currencies} name={""} />
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Form;
