// Home.js
import React from 'react';
import MarketAuxNews from './MarketAuxNews';
import About from './About';
import './global.css';

function Home() {
  return (
    <div>
      <About />
      <MarketAuxNews />
    </div>
  );
}

export default Home;