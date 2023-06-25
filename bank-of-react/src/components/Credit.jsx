import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Credit(props) {
    const navigate = useNavigate();
  
    const navigateToHome = () => {
      // Navigate back to the home page
      return navigate("/");
    };
  
    return (
      <div>
        <h1>Credit Page</h1>
  
        <button onClick={navigateToHome}>Return to Home Page</button>
  
      </div>
    );
  }
  export default Credit;