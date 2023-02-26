import { Link } from "react-router-dom";

function LogoInstagram() {
  const url = "https://www.instagram.com/takeshiju/";
  
  return (
    <Link to={url} target="_blank" rel="noreferrer">
      {/* Ici, vous pouvez ajouter l'image de votre logo d'Instagram */}
      <img src="instalogo.png" alt="Logo Instagram" width="40" height="40" />
    </Link>
  );
}

export default LogoInstagram;

