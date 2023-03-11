import React from "react";
import Lml from "./Lml";
import Footer from "./Footer";
import Sakuraright from "./Sakuraright";
import Sakuraleft from "./Sakuraleft";
import Welcomeneon from "./Welcomeneon";


const Accueil = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "80vh" }}>
      <h1 style={{ display: "flex", wordSpacing: "2pw", color:"#a41514", marginTop: "-3vh"}}>
        <Welcomeneon/>
      </h1>
      <div style={{ maxWidth: "1600px"}}>
      <p style={{display: "flex", fontSize: "25px", wordSpacing: "2px", color:"#white", marginLeft: "5vw", marginTop: "0vh"}}>
          Le design et l'informatique ont toujours été une certaines partie de moi.<br /> 
          En effet je suis passionné par ces domaines. Issu d'un BAC Sciences et Technologies de l'Industrie et du Developpement Durable, j'ai l'intention de reprendre les études plus précisément en BUT Métiers du Multimédia et de l'Internet,
          car cette formation m'intéresse énormément. Il y a beaucoup de choses à découvrir, je sais pertinament que cette formation saura m'épanouir !
        </p>
        <p style={{fontSize: "25px", wordSpacing: "2px", color:"#white", marginLeft: "5vw"}}>
          Je vous remercie d'ores et déjà pour votre visite sur ma page web portfolio et vous souhaites une bonne lecture !
        </p>
      </div>
      <div>
        <Lml />
      </div>
      <div>
        <Sakuraleft/>
      </div>
      <div>
        <Sakuraright/>
      </div>
      <footer 
  style={{
    backgroundColor: "#313332",
    color: "#fff",
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "9vh" /* Utilisation de l'unité de mesure "vh" pour que la hauteur soit relative à la hauteur de la fenêtre */
  }}>
  <Footer/>
</footer>
    </div>
  );
};

export default Accueil;

const routes = [ { path: "/home", label: "Accueil"}];

const header = document.querySelector("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

routes.forEach(route => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = route.path;
  a.textContent = route.label;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);