import React from "react";
import { Link } from "react-router-dom";


//Params hook inot needed here....all the info needed to generate the Nav links is already available in dogs prop.
//Generates a navigation menu where each item is a link to a specific dog's detail page.
function Nav({ dogs }) {//dog is array of objects from App.js
    //key prop is a unique identifier for each child in the list, which helps React identify which items have changed, are added, or are removed. aka NEEDED FOR UPDATES!
    return (
        <nav>
        <Link to="/">
            Home
        </Link>

            {dogs.map(dog => (
                <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}> 
                {dog.name}
                </Link>
            ))}
        
        </nav>
    )
}

export default Nav


//to prop specifies the destination route for the link. It uses template literals to dynamically create a route based on the dog's name (converted to lowercase for consistency in URLs). For example, if a dog's name is "Whiskey," the generated link would be to /dogs/whiskey