import React from "react";
import CardProduct from "./CardProduct";

const List = () => {
  return (
    <div className="page">
      <h1>Produtos</h1>
      <br />
      <div className="filter">
        <h3>Filtros:</h3>
        <div className="text">
          <input type="checkbox" />
          <p>Biojóias</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Cerâmica</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Miriti</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Tecelagem</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Artesanato em palha</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Outros</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Maior Preço</p>
        </div>
        <div className="text">
          <input type="checkbox" />
          <p>Menor Preço</p>
        </div>
      </div>
      <br />
      <div className="list">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default List;
