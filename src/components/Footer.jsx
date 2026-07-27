import React from "react";
import "./Footer.css";


function Footer(){

    return (

        <footer className="footer">

            <p>
                © {new Date().getFullYear()} Netsai Chiyaka.
                Built with React 
            </p>

        </footer>

    );

}


export default Footer;