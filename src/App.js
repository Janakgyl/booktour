import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);
  console.log("data is", tours);
  function removeTour(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>

        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
