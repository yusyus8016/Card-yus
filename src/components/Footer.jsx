import React from "react";
import instagram  from "./imagenes/instagram.svg"
import linkedin from "./imagenes/linkedin.svg"
import github from "./imagenes/github.svg"


export default function Footer(){
    return (
        <div className="footer--container">
            
            <a href="https://www.instagram.com/accounts/login/" target="_bank">
             <img src={instagram}alt="" className="footer--insta"/>
            </a>
            <a href="https://www.linkedin.com/in/devyusyus/" target="_bank">
            <img src={linkedin}alt="" className="footer--linke"/>
            </a>
            <a href="https://github.com/dashboard" target="_bank">
            <img src={github}alt="" className="footer--gith"/>
            </a>
        </div>
    );
}