import React from "react";
import email1 from "./imagenes/email1.svg" 

export default function Card() {
  return (
    <div className="--container">
      <h3 className="card--heading card--content">
           Yusleidy Blandón
      </h3>
      <h4 className="card--h4--one card--content">
          Developer
      </h4>
      <span className="card--span--two card--content">
            Estudiante
      </span>
      <div className="btn--class">   
      <button className="card--btn btn--email">
        
        <a href="https://www.gmail.com/mail/help/intl/es/about.html?iframe" target="_bank">
          <img src={email1} className="email"/>Email
        </a>
      </button>
      </div>

      <div className="Card--about--interes">
        <h3 className="h31">About</h3>
        <p>Soy una estudiante de programación, 
           creativa, me gusta tocar el piano, con
           mis manos doy vida a melodias y con mi
           mente quiero dar vida a soluciones innovadoras.
        </p>
        <h3 className="h32">Interests</h3>
        <p>Quiero dar soluciones a las personas 
          para que ellas tengan alguna esperanza 
          de vida.
         </p>
      </div>
    </div>
  );
}
