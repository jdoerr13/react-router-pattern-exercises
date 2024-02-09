import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from "./NewColorForm";




function App() {
  // Initialize colors state
  const [colors, setColors] = useState([
    { name: "red", value: "#FF0000" },
    { name: "green", value: "#00FF00" },
    { name: "blue", value: "#0000FF" }
  ]);

  // Function to add a new color
  const addColor = (newColor) => {
    setColors(oldColors => [newColor, ...oldColors,]);
  };


  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        <Route exact path="/colors/new" element={<NewColorForm addColor={addColor}/>} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="*" element={<Navigate replace to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
