import './DisplayPoints.css'
import { Points } from "../../types";

const DisplayPoints = (props: {
  name: string
  points: Points,
}): any => {
  const { name, points: { points, distance} } = props;

  return (
    <div className="display-points-container">
      <div className="display-name">{name}</div>
      <div className="display-points">
        {points.map((point, idx) => (
          <span key={idx}>{point.map((p) => p.toFixed(1)).join(", ")}</span>
        ))}
      </div>
      <div className="display-distance">Distance: { distance.toFixed(2) }</div>
    </div>
  )
};

export default DisplayPoints;