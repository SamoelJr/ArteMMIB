import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>ArtesanoBot</h1>
      <div className="navbar-itens">
        <a href="#about-Container">Sobre nos</a>
        <a href="#destinations-container">Produtos mais vendidos</a>
        <a href="#review-user">Vendedoras</a>
      </div>
    </div>
  );
};

export default Navbar;
