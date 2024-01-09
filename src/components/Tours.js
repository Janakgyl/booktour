import React from "react";
import Cards from "./Cards";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Janak</h2>
      </div>
      <div className="cards">
        {
          tours.map((tour) => (
            <Cards key={tour.id} {...tour} removeTour={removeTour} />
          ))
        }
      </div>
    </div>
  );
}

export default Tours;
