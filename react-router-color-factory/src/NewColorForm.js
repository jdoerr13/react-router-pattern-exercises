import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
    //state variable to hold the values of form fields
    const [formData, setFormData] = useState({ name: "", value: "#000000" });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;//DOM element that triggered the event very sensative
      console.log(e.target);
      setFormData(data => ({ ...data, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addColor(formData);
      navigate("/colors");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="value">Color Value:</label>
        <input
          id="value"
          type="color"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
  
        <button>Add Color</button>
      </form>
    );
  }
  

export default NewColorForm;
