import React from 'react';
import Header from './Header';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Rendering App component');
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;