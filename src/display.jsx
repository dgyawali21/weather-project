import { Label, Input, FormGroup } from "reactstrap";
import React from "react";

const Display = ({ weather }) => {
  // Function to convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsiusTemp) => {
    return (celsiusTemp * 9) / 5 + 32;
  };
  try {
    const weatherDetails = weather
      ? `
City: ${weather.name}, ${weather.sys.country}
Temperature: ${celsiusToFahrenheit(weather.main.temp).toFixed(1)}°F
Description: ${weather.weather[0].description}
Wind Speed: ${weather.wind.speed} m/s
Pressure: ${weather.main.pressure} hPa
Humidity: ${weather.main.humidity}%`
      : "";

    return (
      <FormGroup>
        <Label for="DailyWeather">Daily Weather Report:</Label>
        <Input
          id="DailyWeather"
          name="text"
          type="textarea"
          rows="5"
          value={weatherDetails}
        />
      </FormGroup>
    );
  } catch (error) {
    return (
      <FormGroup>
        <Label for="DailyWeather">Daily Weather Report:</Label>
        <Input
          id="DailyWeather"
          name="text"
          type="textarea"
          rows="5"
          value="Zipcode not found"
        />
      </FormGroup>
    );
  }
};

export default Display;
