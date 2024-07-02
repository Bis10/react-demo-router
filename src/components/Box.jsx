import React from "react";

const Box = ({ id, name, title, age, location }) => {
  return (
    <div
      className="card border border-danger mb-3"
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Location: {location}</p>
      </div>
    </div>
  );
};

export default Box;
