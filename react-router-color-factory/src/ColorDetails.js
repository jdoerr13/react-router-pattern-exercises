import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";


//this component is the display the color (with details built in)
function ColorDetails({ colors }) {
   const navigate = useNavigate();

  let { color } = useParams();//hook to extract parameters from the current URL's path; from the /colors/:color on App.py
  const colorObj = colors.find(c => c.name.toLowerCase() === color);

  if (!colorObj) {
    return <Navigate replace to="/colors" />;
  }

  
  return (
    <div style={{ backgroundColor: colorObj.value, height: "100vh", textAlign: "center" }}>
      <h1>This is {colorObj.name}.</h1>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ColorDetails;
