import React from "react";
import { Link } from "react-router-dom";


//to list all available colors and include a link to add a new color
function ColorList({ colors }) {
  return (
    <div>
      <div className="header">
        <h1>Welcome to the color factory.</h1>
        <Link to="/colors/new">Add a new color</Link>
      </div>

      <h3>Please select a color</h3>
      <ul>
      {colors.map(color => (//FOCUS IN PRESENTING SIMPLE LIST OF COLOR NAMES. UI focus on just color names
        <li key={color.name}>
          <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ColorList;
