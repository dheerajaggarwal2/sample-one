import "./styles.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Main() { 
  return (
    <div className="App">
      <Link to="/games">Start Game</Link>
    </div>
  );
}
