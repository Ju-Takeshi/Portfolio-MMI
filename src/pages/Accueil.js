import React from "react";

const Accueil = () => {
return(
      <div>
        <h1
          style={{
            fontSize: "35px",
            wordSpacing: "1px",
            width: "860px",
            float: "left",
            marginTop: "65px",
            marginLeft: "70px"
          }}
        >
            Bienvenue sur mon portfolio ! Je m'apelle Julien. Je souhaites reprendre mes études à l'iut de Lens.</h1>
           <div>
            <p
              style={{
                fontSize: "18px",
                wordSpacing: "1px",
                width: "860px",
                float: "left",
                marginTop: "1px",
                marginRight: "150px",
                marginLeft: "70px",
                lineHeight: "25px"
               }}
            >
                L'informatique et la technologie ont toujours été une certaines partie de moi.<br></br> 
                Oui, en effet je suis passionné par ces domaines. Issu d'un BAC Sciences et Technologies de l'Industrie et du Developpement Durable, j'ai l'intention de reprendre les études plus précisément en BUT informatique,
                car cette formation m'intéresse énormément. Il y a beaucoup de choses à découvrir, je sais pertinament que le developpement web saura m'épanouir !
              </p>
              <p
                style={{
                  fontSize: "18px",
                  wordSpacing: "1px",
                  width: "860px",
                  float: "left",
                  marginTop: "1px",
                  marginRight: "150px",
                  marginLeft: "70px",
                  lineHeight: "25px"
                }}
              >
                Je vous remercie d'ores et déjà pour votre visite sur ma page web portfolio et vous souhaites une bonne lecture !
              </p>
            </div>
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