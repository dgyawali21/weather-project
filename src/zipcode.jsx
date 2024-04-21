import React from "react";
import { Label, Input, FormGroup } from "reactstrap";

export default function Zipcode({ onChange, value }) {
  return (
    <FormGroup>
      <Label for="zipcode">Zip code:</Label>
      <Input
        type="text"
        name="zipcode"
        id="zipcode"
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
}
