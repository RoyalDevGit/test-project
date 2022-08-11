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
    return firstCapital.replaceAll("&#x27;", "'");
  };

  return (
    <div className="card flex column justify-around">
      <div className="row jc-sp ai-c">
        <div className="flex justify price-text">
          <img src={location} className="company-avatar mr-1"></img>
          <div className="">{capitalize(name)}</div>
        </div>
        <div className="">
          <div className="price-text">{`$${price}`}</div>
        </div>
        {/* <aside> */}
        {/* </aside> */}
      </div>
      {/* <div className="description">{getDescription(description)}</div> */}
      <div className="description">{description}</div>
      <div className="w-70 flex column">
        <div className="font-bold">Purchase Date</div>
        <div className="font-light">{getDate(purchaseDate)}</div>
      </div>
    </div>
  );
}
