import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        <Route path="/motivationpdf" component={() => { 
          window.location.href = './motivationpdf.pdf';
          return null;
        }}/>
      </div>
    </Router>
  );
};


export default Motivation;

const routes = [ { path: "/motivation", label: "lettre de motivation"}];

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