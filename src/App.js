import React from 'react';
import './App.css';
import Form from './Components/Form';
import FormResult from './Components/FormResult';

const App =() => {
  return (
    <div id="page-container">
        <header>
          <h1>MoneySwap</h1>
        </header>

        <main>
        <FormResult />
          <Form />
        </main>
        
      </div>
  );
}

export default App;
