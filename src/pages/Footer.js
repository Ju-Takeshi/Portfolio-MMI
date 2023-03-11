import React from "react";
import Gmail from "./Gmail";
import Gitlogo from "./Githublogo";
import Instalogo from "./Instalogo";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-icons">
                <Gmail />
                <Gitlogo />
            </div>
        </div>
    )

}

export default Footer;