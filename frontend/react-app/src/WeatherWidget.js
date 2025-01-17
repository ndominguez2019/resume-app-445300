// WeatherWidget.js
import React, { useState, useEffect } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiHumidity, WiStrongWind, WiSmog, WiThermometer } from 'weather-icons-react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const latitude = 27.97; // Tampa, Florida latitude
  const longitude = -82.46; // Tampa, Florida longitude

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=weathercode&hourly=relativehumidity_2m&hourly=windspeed_10m`);
      const data = await response.json();
      setWeatherData(data);
    };
    fetchWeatherData();

    const fetchAirQualityData = async () => {
      const response = await fetch(`https://api.openaq.org/latest?coordinates=${latitude},${longitude}`);
      const data = await response.json();
      setAirQualityData(data);
    };
    fetchAirQualityData();
  }, [latitude, longitude]);

  if (!weatherData || !airQualityData) {
    return <div>Loading...</div>;
  }

  const currentWeather = weatherData.hourly;
  const currentTemperature = currentWeather.temperature_2m[0];
  const currentWeatherCode = currentWeather.weathercode[0];
  const currentHumidity = currentWeather.relativehumidity_2m[0];
  const currentWindSpeed = currentWeather.windspeed_10m[0];

  let currentAirQuality = '';
  let airQualityUnit = '';

  if (airQualityData.results && airQualityData.results[0] && airQualityData.results[0].measurements && airQualityData.results[0].measurements[0]) {
    currentAirQuality = airQualityData.results[0].measurements[0].value;
    airQualityUnit = airQualityData.results[0].measurements[0].unit;
  }

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return <WiDaySunny size={100} color="#ffcc00" />;
      case 1:
      case 2:
      case 3:
        return <WiCloud size={100} color="#cccccc" />;
      case 45:
      case 48:
        return <WiRain size={100} color="#0099ff" />;
      case 66:
      case 67:
        return <WiSnow size={100} color="#ffffff" />;
      default:
        return <WiDaySunny size={100} color="#ffcc00" />;
    }
  };

  return (
    <div className="weather-widget-container dark-mode">
      <h1>Today's Weather</h1>
      <div className="current-weather">
        {getWeatherIcon(currentWeatherCode)}
        <div className="weather-data-points">
          <div className="weather-data-point">
            <WiHumidity size={50} color="#00ff00" />
            <div className="data-point-info">
              <p className="data-point-value">{currentHumidity}%</p>
              <p className="data-point-label">Humidity</p>
            </div>
          </div>
          <div className="weather-data-point">
            <WiStrongWind size={50} color="#ff0000" />
            <div className="data-point-info">
              <p className="data-point-value">{currentWindSpeed} m/s</p>
              <p className="data-point-label">Wind Speed</p>
            </div>
          </div>
          <div className="weather-data-point">
            <WiSmog size={50} color="#0000ff" />
            <div className="data-point-info">
              <p className="data-point-value">{currentAirQuality} {airQualityUnit}</p>
              <p className="data-point-label">Air Quality</p>
            </div>
          </div>
          <div className="weather-data-point">
            <WiThermometer size={50} color="#ffcc00" />
            <div className="data-point-info">
              <p className="data-point-value">{currentTemperature}°C</p>
              <p className="data-point-label">Temperature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;