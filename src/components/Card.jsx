import React from "react";
import Brand from "./Brand";

export default function Card({
  location,
  name,
  description,
  purchaseDate,
  price,
}) {
  return (
    <div className="card flex column justify-around">
      <div className="row justify-between">
        <Brand avatarUrl={location} name={name}></Brand>
        <div className="price-text">{price}</div>
      </div>
      <div className="w-70 description">{description}</div>
      <div className="w-70 flex column">
        <div className="font-bold">Purchase Date</div>
        <div className="font-light">{purchaseDate}</div>
      </div>
    </div>
  );
}
