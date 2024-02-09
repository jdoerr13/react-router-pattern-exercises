import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';




function App({ dogs }) {
  return (
    <BrowserRouter>
      <Nav dogs={dogs} />
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="*" element={<Navigate replace to="/dogs" />} />
      </Routes>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://static.vecteezy.com/system/resources/thumbnails/003/018/949/small/close-up-portrait-of-tricolor-australian-shepherd-dog-lying-on-the-table-of-a-natural-eye-park-around-him-free-photo.jpeg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://www.aspca.org/sites/default/files/field/image/blog-og-image/grain-free_fb.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://www.pitpat.com/wp-content/uploads/2023/01/Dogs_rights_MS_hero_image_gps_outdoor_active_border_collie_Louis_James-Parker-4-1024x682.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
