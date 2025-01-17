import React from 'react';
import './WeatherWidget.css';

const WeatherWidgetContainer = () => {
  return (
    <div className="weather-widget-container">
      <div className="weather-widget">
        <div className="top-cell"></div>
        <div className="weather-data-grid">
          <div className="weather-data-cell">Cell 1</div>
          <div className="weather-data-cell">Cell 2</div>
          <div className="weather-data-cell">Cell 3</div>
          <div className="weather-data-cell">Cell 4</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidgetContainer;