import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div classname="navigation">
            <ul>
               <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "" )}>
                    <li>accueil</li>
                </NavLink> 
               <NavLink to="/jpoiutdelens" className={(nav) => (nav.isActive ? "nav-active" : "" )}>
                    <li>Experience portes ouvertes</li>
                </NavLink> 
               <NavLink to="/cvjulienlemal" className={(nav) => (nav.isActive ? "nav-active" : "" )}>
                    <li>cv</li>
                </NavLink> 
               <NavLink to="/myproject" className={(nav) => (nav.isActive ? "nav-active" : "" )}>
                    <li>mon projet</li>
                </NavLink> 
               <NavLink to="/motivation" className={(nav) => (nav.isActive ? "nav-active" : "" )}>
                    <li>lettre de motivation</li>
                </NavLink> 
            </ul>
        </div>
    );
};

export default Navigation;