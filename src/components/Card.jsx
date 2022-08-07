import React from "react";

export default function Card({
  location,
  name,
  description,
  purchaseDate,
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
    const dateString = input.toString();
    const splitString = dateString.split(" ");
    return splitString[1] + " " + splitString[2] + ", " + splitString[3];
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
    <div className="card flex column justify-around">
      <div className="row">
        <img src={location} className="company-avatar"></img>
        <div className="name-card w-70">{capitalize(name)}</div>
        <aside>
          <div className="price-text right">{`$${price}`}</div>
        </aside>
      </div>
      <div className="description">{getDescription(description)}</div>
      <div className="w-70 flex column">
        <div className="font-bold">Purchase Date</div>
        <div className="font-light">{getDate(purchaseDate)}</div>
      </div>
    </div>
  );
}
