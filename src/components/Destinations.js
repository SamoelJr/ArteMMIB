import React from "react";
import CardDestinations from "./CardDestinations";
import cardOne from "../imgs/card-one.jpg";
import cardTwo from "../imgs/card-two.jpg";
import cardThree from "../imgs/card-three.jpg";
import Button from "./Button";

const Destinations = () => {
  return (
    <div className="destinations-container" id="destinations-container">
      <h1>Produtos mais vendidos</h1>
      <div className="popular-destinations">
        <CardDestinations
          title={"Colar de Fitilho e palha da Costa"}
          img={cardThree}
        />
        <CardDestinations title={"Biojóias do MMIB"} img={cardTwo} />
        <CardDestinations
          title={"Kit Seminário de papel artesanal"}
          img={cardOne}
        />
      </div>
      <div className="button-proj">
        <Button text={"Ver Produtos"} link={"/#/list"} />
      </div>
    </div>
  );
};

export default Destinations;
