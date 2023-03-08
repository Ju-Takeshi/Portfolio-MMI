import React from "react";
import Image from "./Jeuxdugo";
import Imagegroupe from "./Photodegroupe";



const Jpo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textDecoration: "underline", color: '#D2D2D2'}}>
        Ma journée aux portes ouvertes de l'iut de Lens !
      </h1>
      <div style={{ maxWidth: "1000px"}}>
        <p style={{fontSize: "25px", wordSpacing: "2px", color:"#D2D2D2"}}>
          Le 4 février j'ai eu la chance de pouvoir découvrir l'IUT de Lens !<br></br>
          Ce jour-là, les membres du club Japon m'ont offert un accueil plus que chaleureux en m'invitant à participer aux activités mises en place par leur propre soin.<br></br>
          J'ai également eu le droit à une présentation de l'établissement plus précisément la partie BUT / MMI mais aussi à plusieurs rencontres avec : Mme. Membre , Mr. Condotta , Mme. Saillot.<br></br>   
          J'ai donc profité de leur disponibilité afin d'approfondir mes renseignements concernant la formation BUT informatique afin d'avoir une réelle idée de ce qui pouvait m'attendre.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "900px"}}>
        <Imagegroupe />
      </div>
      <div style={{ maxWidth: "1000px", }}>
        <h1 style={{ textDecoration: "underline", color: '#D2D2D2', display: "flex", flexDirection: "column", alignItems: "center" }}>
          Mon ressenti
        </h1>
        <p style={{fontSize: "25px", wordSpacing: "2px", color:"#D2D2D2"}}>
          Si je devais donner mon avis concernant cette journée, je pense très certainement que je dirai que ce fut une journée porte ouverte très surprenante dû à sa qualité d'accueil mais aussi de renseignements.<br></br>
          Les rencontres que j'ai pu faire m'ont données encore plus envie d'être l'un des étudiants en BUT informatique de l'iut de Lens.<br></br> 
          Car pour moi la qualité d'un établissement scolaire vient des professeurs mais également des élèves. Il n'y a rien de plus important qu'un entourage sain.<br></br>
          Donc oui cette journée était vraiment extraordinaire ! Moi aussi je souhaites faire partie du club japon et surtout étudier à l'iut de Lens. Je ferai tout ce qui est en mon possible pour y parvenir.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "820px"}}>
        <Image />
      </div>
    </div>
  );
};



export default Jpo;

const routes = [ { path: "/jpo", label: "Journée portes ouvertes"}];

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