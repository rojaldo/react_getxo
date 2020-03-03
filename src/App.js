import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCalculator from './MyCalculator';
import Heroes from './Heroes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyCalculator></MyCalculator> */}
        <Heroes></Heroes>
        
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
