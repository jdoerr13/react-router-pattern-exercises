import React from "react";
import { useParams, useNavigate } from "react-router-dom";



//useParams used here to extract the dog's name (parameters) from the URL to fetch or display that specific dog's details. 
function DogDetails({ dogs }) {
   const navigate = useNavigate();

  let { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name);

  return (
    <div>
      {dog ? (
        <div>
          <h2>{dog.name}</h2>
          <p>Age: {dog.age}</p>
      {/* Render the image using the src URL */}
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
        </div>
      ) : (
        <p>Dog not found!</p>
      )}

   <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default DogDetails;
