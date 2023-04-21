/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from "./Button";
import cardTwo from "../imgs/card-two.jpg";

const CardProduct = () => {
  return (
    <div className="product">
      <img src={cardTwo} alt="image" />
      <p>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Preço: 100R$</p>
      <Button
        text={"Comprar"}
        link={"http://wa.me/+14155238886?text=join%20audience-iron"}
      />
    </div>
  );
};

export default CardProduct;
