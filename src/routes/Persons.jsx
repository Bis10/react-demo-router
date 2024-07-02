import React from "react";
import Box from "../components/Box";

const Persons = ({ persons }) => {
  return (
    <div className="container">
      <h2>Persons</h2>
      <div className="row">
        {persons.map((person) => (
          <div key={person.id} className="col-md-4 mb-3">
            <Box {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Persons;
