import React from "react";
import { Button } from "react-bootstrap";
import "./TogglerButton.css";

const TogglerButton = ({ name, selected, onclick }) => {
  return (
    <Button
      onClick={() => onclick(name)}
      className={`buttonContainer ${
        name === selected ? "ActiveButton" : "InativeButton"
      }`}
    >
      {name}
    </Button>
  );
};

export default TogglerButton;
