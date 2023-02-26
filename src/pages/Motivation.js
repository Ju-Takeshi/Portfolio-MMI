import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Motivation = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/motivationpdf">PDF</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};


export default Motivation;

const routes = [ { path: "./motivationlemal", label: "Lettre de motivation"}];

const header = document.querySelector("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

routes.forEach(route => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "./motivationlemal.pdf";
  a.target= "_blank";
  a.textContent = route.label;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);