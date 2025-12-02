import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const {
    name,
    main: { temp, feels_like, humidity, pressure, temp_min, temp_max },
    weather: weatherInfo,
    wind: { speed },
    visibility,
    sys: { sunrise, sunset },
  } = weather;

  const icon = weatherInfo[0].icon;
  const description = weatherInfo[0].description;

  const formatTime = (unix) =>
    new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}</h2>
        <p className="weather-desc">{description}</p>
      </div>
      <div className="weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <h1>{temp}°C</h1>
        <p>Feels like {feels_like}°C</p>
      </div>
      <div className="weather-grid">
        <div className="grid-item">
          <p>Humidity</p>
          <h4>{humidity}%</h4>
        </div>
        <div className="grid-item">
          <p>Min Temp</p>
          <h4>{temp_min}</h4>
        </div>
        <div className="grid-item">
          <p> Max Temp</p>
          <h4>{Math.round(temp_max)}°C</h4>
        </div>

        <div className="grid-item">
          <p>👁 Visibility</p>
          <h4>{(visibility / 1000).toFixed(1)} km</h4>
        </div>

        <div className="grid-item">
          <p> Pressure</p>
          <h4>{pressure} hPa</h4>
        </div>

        <div className="grid-item">
          <p>Sunrise</p>
          <h4>{formatTime(sunrise)}</h4>
        </div>

        <div className="grid-item">
          <p>Sunset</p>
          <h4>{formatTime(sunset)}</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
