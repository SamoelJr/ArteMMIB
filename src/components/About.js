import React from "react";
import Card from "./Card";
import photoOne from "../imgs/photo-one.jpg";
import photoTwo from "../imgs/photo-two.jpg";
import { AiFillRobot } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const About = () => {
  return (
    <div className="about-Container" id="about-Container">
      <div className="about">
        <div className="about-imgs">
          <img src={photoTwo} alt="" className="front" />
          <img src={photoOne} alt="" className="back" />
        </div>
        <div className="about-text">
          <h1>- Sobre nós - </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit iaculis sem, non commodo mi luctus non. Nam malesuada dolor
            id dui tempor, et suscipit odio scelerisque. Sed et lacus eget enim
            feugiat dictum. Aenean commodo dapibus est, a consectetur mauris
            iaculis et. Curabitur facilisis libero id nisl ullamcorper molestie.
          </p>
          <p>
            Maecenas malesuada viverra enim, vel viverra velit fringilla vel.
            Nam vel risus eu tellus egestas aliquet. In hac habitasse platea
            dictumst. Proin id metus id nulla blandit luctus eu eget elit.
            Aliquam ac velit vel velit congue pharetra vel vel sem. Nam id diam
            vel velit posuere viverra.
          </p>
        </div>
      </div>
      <div className="cards">
        <Card title={"Bot Para venda"} icon={<AiFillRobot />} />
        <Card title={"Vendedor do MMIB"} icon={<IoIosPerson />} />
        <Card title={"Pagamento Fácil"} icon={<MdPayment />} />
        <Card title={"Varios Produtos"} icon={<AiOutlineShoppingCart />} />
      </div>
    </div>
  );
};

export default About;
