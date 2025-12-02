import React from "react";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import sunnyVideo from "../../assets/sunny.mp4";
import cloudyVideo from "../../assets/cloudy.mp4";
import rainVideo from "../../assets/rain.mp4";
import stormVideo from "../../assets/strom.mp4";
import fogVideo from "../../assets/fog.mp4";
import snowVideo from "../../assets/snow.mp4";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_KEY = "e99e45deaac12ded760d3886bb092d2a";

  const getBackgroundVideo = () => {
    if (!weather) return stormVideo;

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        return sunnyVideo;
      case "Clouds":
        return cloudyVideo;
      case "Rain":
        return rainVideo;
      case "Thunderstorm":
        return stormVideo;
      case "Mist":
      case "Haze":
      case "Fog":
        return fogVideo;
      case "Snow":
        return snowVideo;
      default:
        return cloudyVideo;
    }
  };

  const fetchWeather = async (event) => {
    event.preventDefault();

    if (city.trim() === "") {
      setError("Enter city name");
      return;
    }
    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        setError("City not found");
        setWeather(null);
        return;
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("Something went wrong");
    }
  };
  const goToForecast = () => {
    navigate("/forecast", {
      state: { cityName: city },
    });
  };

  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        <video
        key={getBackgroundVideo()}
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src={getBackgroundVideo()} type="video/mp4" />
      </video>
        <div className="overlay"></div>
        <div className="home-container">
          <h2 className="home-title">Sky Mate..</h2>
          <form className="search-form" onSubmit={fetchWeather}>
            <input
              type="text"
              className="search-input"
              placeholder="Enter City Name"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
          {error && <p className="error-text">{error}</p>}
          {weather && (
            <div>
              <WeatherCard weather={weather} />
              <button className="forecast-btn" onClick={goToForecast}>
                View Next days Forecast
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
