import React, { useState } from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => { 
    setCount(count + 1);
  }

  return <button onClick = {handleClick}>{props.label} - {count}</button>;
};

export default Button;
