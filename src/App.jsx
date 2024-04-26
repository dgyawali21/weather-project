import React, { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Zipcode from "./zipcode";
import ButtonComponent from "./button"; // Assuming this is your renamed Button file
import WeeklyForecast from "./WeeklyForecast";
import Alert from "./alert.jsx";
import Display from "./display.jsx";
import { fetchWeatherData } from "./apicall";
import { fetchDailyWeather } from "./dailyweatherdata";
import "./styles.css";

function App() {
  const [zipCode, setZipCode] = useState("");
  const [weather, setWeather] = useState("");
  const [dailyalerts, setDailyalerts] = useState("");
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  const handleZipCodeChange = useCallback((e) => {
    setZipCode(e.target.value);
  }, []);

  const handleFetchWeather = useCallback(async () => {
    try {
      const dailyData = await fetchDailyWeather(zipCode);
      const forecastData = await fetchWeatherData(zipCode);
      setWeather(dailyData);
      setDailyalerts(dailyData);
      setWeeklyForecast(forecastData);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  }, [zipCode]);

  const handleReset = useCallback(() => {
    setWeather("");
    setDailyalerts("");
    setZipCode("");
    setWeeklyForecast([]);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Weather App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Zipcode value={zipCode} onChange={handleZipCodeChange} />
        </Col>
        <Col>
          <ButtonComponent onClick={handleFetchWeather} />
        </Col>
        <Col>
          <ButtonComponent onClick={handleReset} title="Reset" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Display weather={weather} />
        </Col>
        <Col>
          <Alert dailyalerts={dailyalerts} />
        </Col>
      </Row>
      <Row>
        <Col>
          <WeeklyForecast weeklyForecast={weeklyForecast} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;