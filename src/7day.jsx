import { Label, Input, Button, FormGroup } from "reactstrap";
import React from "react";

export default function WeeklyForcast({ onClick }){
    return(
        <FormGroup>
            <Button onClick={onClick} className="button">
            Submit
            </Button>
      </FormGroup>
    );
}