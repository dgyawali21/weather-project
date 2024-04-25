import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const DailyForecastCard = ({ dayForecast }) => (
  <Col>
    <Card body>
      <CardTitle tag="h5">{dayForecast.date}</CardTitle>
      <CardText>Sunrise: {dayForecast.astro.sunrise}</CardText>
      <CardText>Sunset: {dayForecast.astro.sunset}</CardText>
      <CardText>High: {dayForecast.day.maxtemp_f}°F</CardText>
      <CardText>Low: {dayForecast.day.mintemp_f}°F</CardText>
      <CardText>Avg: {dayForecast.day.avgtemp_f}°F</CardText>
      <CardText>Wind Speed: {dayForecast.day.maxwind_mph}mph</CardText>
      <CardText>Humidity: {dayForecast.day.avghumidity}%</CardText>
      <CardText>Chance of Rain: {dayForecast.day.daily_chance_of_rain}%</CardText>
      <CardText>{dayForecast.day.condition.text}</CardText>
    </Card>
  </Col>
);

const WeeklyForecast = ({ weeklyForecast }) => {
  return (
    <Row>
      {weeklyForecast.map((dayForecast, index) => (
        <DailyForecastCard key={index} dayForecast={dayForecast} />
      ))}
    </Row>
  );
};

export default WeeklyForecast;