import { Link } from "react-router-dom";
import React from "react";

export default function Main() { 
  return (
    <div className="mainGame">
      <Link to="/games">Start Game</Link>
    </div>
  );
}
