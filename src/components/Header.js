import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-gradient">
        <div className="itens">
          <h1>Produtos de artesanato online</h1>
          <p>Compre produtos de artesanato direto da ilha de cotijuba</p>
          <Button text={"Ver Produtos"}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
