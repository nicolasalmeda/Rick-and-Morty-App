import React from "react";

export const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body mx-2">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>location: {item.location.name}</p>
              <p>{item.species}</p>
              <p>{item.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
