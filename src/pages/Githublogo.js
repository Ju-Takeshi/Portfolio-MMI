import React from 'react';
import { Link } from "react-router-dom";

function Gitlogo() {
    const url = "https://github.com/Ju-Takeshi/Portfolio-MMI.git";
    
    return (
      <Link to={url} target="_blank" rel="noreferrer">
        {/* Ici, vous pouvez ajouter l'image de votre logo d'Instagram */}
        <img src="githublogo.png" alt="Logo github" width="40" height="40" />
      </Link>
    );
  }
  
  export default Gitlogo;
