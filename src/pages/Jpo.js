import React from "react";
import Image from "./Jeuxdugo";
import Imagegroupe from "./Photodegroupe";


const Jpo = () => {
  return (
    <div>
      <h1 style={{ textDecoration: "underline", color: '#7A90A4'}}>
        Ma journée aux portes ouvertes de l'iut de Lens !
        </h1>
      <div style={{width: "900px", float: "left",}}>
        <p style={{fontSize: "25px", wordSpacing: "2px", color:"#B8CBD0", marginTop: "-5px" }}>
          Le 4 février j'ai eu la chance de pouvoir découvrir l'IUT de Lens !<br></br>
          Ce jour-là, les membres du club Japon m'ont offert un accueil plus que chaleureux en m'invitant à participer aux activités mised en place par leur propre soin.<br></br>
          J'ai également eu le droit à une présentation de l'établissement plus précisément la partie BUT / MMI mais aussi à plusieurs rencontres avec : Mme.Membre , Mr.Condotta , Mme. Saillot.<br></br>   
          J'ai donc profité de leur disponibilité afin d'approfondir mes renseignements concernant la formation BUT informatique afin d'avoir une réelle idée de ce qui pouvait m'attendre.
          
         </p>
      </div>
      <div style={{marginTop: "1px", marginLeft: "750px", display: "legacy", width: "1000px", height: "100px" }}>
        <Imagegroupe />
        <h1 style={{ textDecoration: "underline", marginLeft: "-80px", marginTop: "-15px", color: '#7A90A4' }}>
          Mon ressenti
        </h1>
        <p style={{marginTop: "20px", marginLeft: "-80px", display: "legacy", fontSize: "25px", color: "#B8CBD0" }}>
          Si je devais donner mon avis concernant cette journée, je pense très certainement que je dirai que ce fut une journée porte ouverte très surprenante dû à sa qualité d'accueil mais aussi de renseignements.<br></br>
          Les rencontres que j'ai pu faire m'ont données encore plus envie d'être l'un des étudiants en BUT informatique de l'iut de Lens.<br></br> 
          Car pour moi la qualité d'un établissement scolaire vient des professeurs mais également des élèves. Il n'y a rien de plus important qu'un entourage sain.<br></br>
          Donc oui cette journée était vraiment extraordinaire ! Moi aussi je souhaites faire partie du club japon et surtout étudier à l'iut de Lens. Je ferai tout ce qui est en mon possible pour y parvenir.
        </p>
      </div>
      <div style={{marginTop: "240px", marginRight: "100px", display: "flex", width: "820px", height: "420px" }}>
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
