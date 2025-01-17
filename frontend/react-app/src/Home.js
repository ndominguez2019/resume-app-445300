import React from 'react';
import MarketAuxNews from './MarketAuxNews';
import About from './About';
import WeatherWidgetContainer from './WeatherWidgetContainer'; 
import ProjectWidgetContainer from './ProjectWidgetContainer'; 
import './global.css';

function Home() {
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        width: '100%' 
      }}>
        <div style={{ 
          flex: '1', // Update this line
          marginRight: '5px', 
          marginTop: '-40px' 
        }}>
          <About />
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          <WeatherWidgetContainer />
          <ProjectWidgetContainer />
        </div>
      </div>
      <MarketAuxNews />
    </div>
  );
}

export default Home;