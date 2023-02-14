import React from 'react';


const Cvjulienlemal = () => {
    return (
        <div> 
            <h1>"insérer document pdf cv"</h1>
        </div>
    );
};

export default Cvjulienlemal;

const routes = [ { path: "/cvjulienlemal", label: "cv"}];

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