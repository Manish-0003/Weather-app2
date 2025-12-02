import React, { useState } from "react";
import { useEffect } from "react";
import "./Forecast.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLocation, useNavigate } from "react-router";

const Forecast = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const API_KEY = "e99e45deaac12ded760d3886bb092d2a";

  useEffect(() => {
    if (location.state && location.state.cityName) {
      const cityName = location.state.cityName;
      setCity(cityName);
      fetchForecast(cityName);
    } else {
      setError("Please search a city first.");
      setLoading(false);
    }
  }, [location.state]);

  const fetchForecast = async (cityName) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) {
        setError("City not found.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      const daily = [];
      const seenDates = new Set();

      data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!seenDates.has(date)) {
          daily.push(item);
          seenDates.add(date);
        }
      });

      setForecast(daily.slice(0, 5));
      setError("");
    } catch (err) {
      setError("Failed to fetch forecast data.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="forecast-container">
        <h1>5-Day Forecast</h1>
        {city && <h2>{city}</h2>}

        {loading && <p className="loading">Loading forecast...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <div className="forecast-grid">
            {forecast.map((day, index) => {
              const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              });

              return (
                <div className="forecast-card" key={index}>
                  <h3>{date}</h3>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                  />
                  <p className="temp">{Math.round(day.main.temp)}°C</p>
                  <p className="desc">{day.weather[0].description}</p>
                  <p className="min-max">
                    Min: {Math.round(day.main.temp_min)}°C | Max:{" "}
                    {Math.round(day.main.temp_max)}°C
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {!loading && !error && (
          <button className="back-btn" onClick={goBack}>
            ← Back to Home
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Forecast;
