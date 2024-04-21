import { useState, React, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Form } from "reactstrap";
import Zipcode from "./zipcode.jsx";
import Search from "./button.jsx";
import Alert from "./alert.jsx";
import Display from "./display.jsx";
import { fetchWeatherData } from "./apicall.jsx";
import "./styles.css";

function App() {
  const [usezipcode, Setusezipcode] = useState("");
  const [weather, Setweather] = useState("");
  const [dailyalerts, Setdailyalerts] = useState("");

  const handlesubmit = useCallback((e) => {
    Setusezipcode(e.target.value);
  }, []);

  const Handleclick = useCallback(async () => {
    const weatherData = await fetchWeatherData(usezipcode);
    Setweather(weatherData);
    Setdailyalerts(weatherData);
  }, [usezipcode]);

  const Reset = useCallback(() => {
    Setusezipcode("");
    Setweather("");
    Setdailyalerts("");
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
          <Zipcode
            name="zipcode"
            id="zipcode"
            onChange={handlesubmit}
            value={usezipcode}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Search onClick={Handleclick} />
        </Col>
        <Col>
          <Button onClick={Reset} className="button">
            Reset
          </Button>
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
    </Container>
  );
}

export default App;
