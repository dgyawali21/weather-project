import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormGroup } from "reactstrap";

export default function ButtonComponent({ onClick }) {
  return (
    <FormGroup>
      <Button onClick={onClick} className="button">
        Submit
      </Button>
    </FormGroup>
  );
}
