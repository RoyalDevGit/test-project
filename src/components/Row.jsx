import React from "react";

export default function Row({
  name,
  location,
  purchaseDate,
  category,
  description,
  price,
}) {
  const capitalize = (input) => {
    if (!input) return "";
    const separated = input.toLowerCase().split(" ");
    for (let i = 0; i < separated.length; i++) {
      separated[i] =
        separated[i].charAt(0).toUpperCase() + separated[i].substring(1);
    }
    return separated.join(" ");
  };

  const getDate = (date) => {
    if (!date) return "";
    const input = new Date(date);
    if (!input) alert("Invalid input");
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateString = input.toLocaleDateString("en-US", options);
    return dateString;
  };

  const getDescription = (oldString) => {
    if (!oldString) return "";
    const firstCapital = oldString.replace(
      oldString[0],
      oldString[0].toUpperCase()
    );
    return firstCapital.replace("&#x27;", "'");
  };

  return (
    <tr className="table-row">
      <td></td>
      <td className="name-cell">{capitalize(name)}</td>
      <td className="img-cell">
        <img src={location} className="company-avatar"></img>
      </td>
      <td className="date-cell">{getDate(purchaseDate)}</td>
      <td style={{ textAlign: "center" }}>
        <div className={`category-cell category-${category}`}>{category}</div>
      </td>
      <td className="description-cell">{getDescription(description)}</td>
      <td className="name-cell">{`$${price}`}</td>
      <td className="ellipsis-cell">
        <span className="ellipsis-span">&#8942;</span>
      </td>
    </tr>
  );
}
