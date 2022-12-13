import React, { useState } from 'react';
import './App.css';
import { calculatedPoints, CalculatedPoints } from "./calculations";
import DisplayPoints from "./components/DisplayPoints";

const defaultCalculatedPoints = {
  closest: {
    distance: 0,
    points: [[0, 0], [0, 0]]
  },
  furthest: {
    distance: 0,
    points: [[0, 0], [0, 0]]
  },
  average: 0
}

const parsePoints = (points: string): number[][] => {
  return points.split(" ")
    .map((points) => points.split(",")
      .map((point) => parseFloat(point)));
};

const App = () => {
  const [coordinates, setCoordinates] = useState("");
  const [coordinatesError, setCoordinatesError] = useState("");
  const [points, setPoints] = useState<CalculatedPoints>(defaultCalculatedPoints);

  const validateInput = () => {
    let inputIsValid = true;

    if (coordinates.length === 0) {
      inputIsValid = false;
    } else if (!/^\d+(,\d+)*( \d+(,\d+)*)*/g.test(coordinates)) {
      inputIsValid = false
    }

    return inputIsValid
  };

  const handleChange = (event: any) => {
    setCoordinates(event.target.value)
  };

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (validateInput()) {
      // 0,1.234 3,8 4,3 10,13
      setPoints(calculatedPoints(parsePoints(coordinates)));
      setCoordinatesError("");
    } else {
      setCoordinatesError("Invalid Coordinates");
      setPoints(defaultCalculatedPoints);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form  onSubmit={handleSubmit}>
          <label>Input Coordinates:
            <div className="input-form">
              <input
                className="input-field"
                type="text"
                name="coordinates"
                onChange={handleChange}
              />
              <span className="input-error">{ coordinatesError }</span>
            </div>
          </label>
          <input type="submit" />
        </form>
        <br />
        <div className="display-container">
          <div>
            <DisplayPoints
              name="Closest"
              points={points?.closest}
            />
          </div>
          <div>
            <DisplayPoints
              name="Most Separated"
              points={points?.furthest}
            />
          </div>
          <div>
            <p>Average Distance: {points?.average.toFixed(2)}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
