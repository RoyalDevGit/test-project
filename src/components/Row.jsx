import React from "react";

export default function Row({
  name,
  location,
  purchaseDate,
  category,
  description,
  price,
}) {
  return (
    <tr className="table-row">
      <td></td>
      <td>{name}</td>
      <td>
        <img src={location} className="company-avatar"></img>
      </td>
      <td>{purchaseDate}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td></td>
    </tr>
  );
}
