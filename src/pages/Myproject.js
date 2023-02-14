import React from 'react';


const Myproject = () => {
    return (
        <div>
            <h1>Mon projet pour les années à venir...</h1>
        </div>
    );
};

export default Myproject;

const routes = [ { path: "/myproject", label: "mon projet"}];

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