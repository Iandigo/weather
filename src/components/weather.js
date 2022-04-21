import React from "react";

const weather = ({ weatherData }) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="location-box">
      <div className="location">
        {weatherData.name}, {weatherData.sys.country}
      </div>
      <div className="date">{dateBuilder(new Date())}</div>
      <div className="weather-box">
        <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
        <div className="weather">{weatherData.weather[0].main}</div>
      </div>
    </div>
  );
};

export default weather;
