import React from 'react'

const Form = () => {
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
