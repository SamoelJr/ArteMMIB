import React from "react";
import userOne from "../imgs/user-one.jpg";
import userTwo from "../imgs/user-two.jpeg";
import userThree from "../imgs/user-three.jpg";
import CardReviews from "./CardReviews";

const Reviews = () => {
  return (
    <div className="review" id="review-user">
      <h1>Vendedoras</h1>
      <div className="review-user">
        <CardReviews imgUser={userOne} name={"Silva Santos"} />
        <CardReviews imgUser={userTwo} name={"Oliveira Rodrigues"} />
        <CardReviews imgUser={userThree} name={"Souza Almeida"} />
      </div>
    </div>
  );
};

export default Reviews;
