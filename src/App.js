import React from 'react';
import './App.css';

const App =() => {
  return (
    <div id="page-container">
        <header>
          <h1>MoneySwap</h1>
        </header>

        <main>
          <h3>
            ⬇ Fill out the form below ⬇
          </h3>

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
        </main>
        
      </div>
  );
}

export default App;
