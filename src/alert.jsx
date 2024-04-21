import { Label, Input, FormGroup } from "reactstrap";
import React from "react";

const Alert = ({ dailyalerts }) => {
  const celsiusToFahrenheit = (celsiusTemp) => {
    return (celsiusTemp * 9) / 5 + 32;
  };

  //makes sure that the zipcode given is valid
  try {
    const weatherAlerts = dailyalerts
      ? `
Gust: ${dailyalerts.wind.gust} m/s
Visability: ${dailyalerts.visibility} m
Feels like: ${celsiusToFahrenheit(dailyalerts.main.feels_like).toFixed(1)} °F
Wind Speed: ${dailyalerts.wind.speed} m/s
`
      : "";
    return (
      <FormGroup>
        <Label for="WeatherAlerts">Weather Alerts:</Label>
        <Input
          id="WeatherAlerts"
          name="text"
          type="textarea"
          rows="5"
          value={weatherAlerts}
        />
      </FormGroup>
    );
  } catch (error) {
    return (
      <FormGroup>
        <Label for="WeatherAlerts">Weather Alerts:</Label>
        <Input
          id="WeatherAlerts"
          name="text"
          type="textarea"
          rows="5"
          value="Zipcode not found"
        />
      </FormGroup>
    );
  }
};
export default Alert;
