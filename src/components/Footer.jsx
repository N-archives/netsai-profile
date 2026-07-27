import React from "react";
import "./Footer.css";


function Footer(){

    return (

        <footer className="footer">

            <p>
                © {new Date().getFullYear()} Netsai Chiyaka.
                Built with React 
            </p>
            <a href="https://github.com/N-archives">
GitHub
</a>

<a href="https://www.linkedin.com/in/netsai-chiyaka-18b491264/">
LinkedIn
</a>

        </footer>

    );

}


export default Footer;