import React from "react";
import Gmail from "./Gmail";
import Gitlogo from "./Githublogo";
import Instalogo from "./Instalogo";

function Footer() {
    return (
        <footer>
        <div className="footer">
            <div className="footer-icons">
                <Gmail />
                <Gitlogo />
                <Instalogo />
            </div>
        </div>
        </footer>
    )

}

export default Footer;