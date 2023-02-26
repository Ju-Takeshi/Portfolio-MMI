import React from 'react';


const Myproject = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1  
             style={{
                    background: "linear-gradient(to right, #fff, #fff 35%, #d30731 35%, #d30731 65%, #fff 65%)",
                     "-webkit-background-clip": "text",
                     "-webkit-text-fill-color": "transparent",
                     maxWidth: "1000px",
                     }}>
                
                 Mon projet pour les années à venir ! 
            </h1>
            <p style={{fontSize: "25px", wordSpacing: "2px", color:"#B8CBD0", maxWidth: "1000px", alignItems: "center"}}>
                Il est important pour moi de vous faire part de mon projet pour les années à venir si je suis accepté à l'IUT de Lens.<br></br>
            </p>
            <div style={{fontSize: "25px", wordSpacing: "2px", color:"#B8CBD0", maxWidth: "1000px", alignItems: "center"}}>
                <p>
                    En effet, l'intention de reprendre les études m'a permis de redonner vie aux projets aux quels je tenais tant. Ils représentent une partie de ma volonté qui chaque jour me donne envie de faire de mon mieux !<br></br>
                 </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{textDecoration: "underline", color:"#7A90A4" }}>
                     Viser le master </h1>
                <p style={{fontSize: "25px", wordSpacing: "2px", color:"#B8CBD0", maxWidth: "1000px", alignItems: "center"}}>
                     Une fois mes 3 ans d'études au sein de l'iut d </p>
            </div>
        </div>
    );
};

export default Myproject;

const routes = [ { path: "/myproject", label: "Mon projet"}];

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