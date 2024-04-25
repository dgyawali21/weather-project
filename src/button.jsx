import React from "react";
import { Button, FormGroup } from "reactstrap";

const ButtonComponent = ({ onClick, title }) => {
  return (
    <FormGroup>
      <Button onClick={onClick} className="button">
        {title || "Submit"}
      </Button>
    </FormGroup>
  );
};

export default ButtonComponent;