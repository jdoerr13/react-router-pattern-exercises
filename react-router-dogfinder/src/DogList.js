import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(dog => (//MAKING ENTIRE CONTENT BLOCK WITHIN THE DIV A SINGLE INTERACT ELEMENT= MAKING LARGER AREAS CLICKABLE
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            <h2>{dog.name}</h2>
            {/* Display dog image and other info as needed */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
