import React from 'react';


const Cvjulienlemal = () => {
    return (
        <div> 
            <h1>"insérer document pdf cv"</h1>
        </div>
    );
};

export default Cvjulienlemal;

const routes = [ { path: "/cvlemaljulienmmi,", label: "CV"}];

const header = document.querySelector("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

routes.forEach(route => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "./cvlemaljulienmmi.pdf";
  a.target= "_blank";
  a.textContent = route.label;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);