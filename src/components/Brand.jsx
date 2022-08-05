import React from "react";

export default function Brand({ avatarUrl, name }) {
  return (
    <div className="row">
      <img src={avatarUrl} className="company-avatar"></img>
      <div className="typography">{name}</div>
    </div>
  );
}
