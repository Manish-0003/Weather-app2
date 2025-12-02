import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Sky Mate..</h1>
          <p>
            Sky Mate is a modern weather application designed to deliver
            accurate real-time weather updates with an elegant user interface.
            Our goal is to make weather forecasting simple, intuitive, and
            visually engaging for everyone.
          </p>
           <p>
            The app uses live API data, dynamic animations, and personalized
            visual themes based on weather conditions — giving you the best
            experience whether it's sunny, cloudy, or stormy.
          </p>
          <h2>🌦 What Sky Mate Offers</h2>
          <ul>
            <li>Real-time weather updates</li>
            <li>5-day detailed forecast</li>
            <li>Dynamic animated backgrounds</li>
            <li>Clean and modern UI</li>
            <li>Fast and responsive design</li>
          </ul>
          <div className="about-highlight">
            Built with ❤️ using React & modern UI animations.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
