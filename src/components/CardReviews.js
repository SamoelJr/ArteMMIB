import React from "react";

const CardReviews = ({ imgUser, name }) => {
  return (
    <div className="card-reviews">
      <img src={imgUser} alt="" />
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        suscipit iaculis sem, non commodo mi luctus non. Nam malesuada dolor id
        dui tempor, et suscipit odio scelerisque.
      </p>
    </div>
  );
};

export default CardReviews;
