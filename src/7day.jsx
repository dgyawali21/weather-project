import { Label, Input, Button, FormGroup } from "reactstrap";
import React from "react";

export default function WeeklyForecast({ onSubmit }) {
  return (
    <FormGroup>
      <input type="text" placeholder="Enter zip code" id="7day" />
      <Button onClick={onSubmit} className="button">
        Submit
      </Button>
    </FormGroup>
  );
}