import React from "react";
import "./components/Card.css"
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app--container">
      <div className="app--container--two">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}
