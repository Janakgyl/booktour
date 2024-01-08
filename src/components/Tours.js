import React from "react";
import Cards from "./Cards";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div>
        <h2>Plan With Janak</h2>
      </div>
      <div>
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
