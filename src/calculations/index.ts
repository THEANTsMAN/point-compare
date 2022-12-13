import { Points } from "../types";

export interface CalculatedPoints {
  closest: Points;
  furthest: Points;
  average: number;
}

const distance = (pointA: number[], pointB: number[]): number => {
  return Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2));
};

export const calculatedPoints = (arr: number[][]): CalculatedPoints => {
  let closest: Points = {
    distance: Infinity,
    points: [[], []],
  };
  let furthest: Points = {
    distance: 0,
    points: [[], []],
  }
  let totalDistance: number = 0

  for (let i = 0; i <= arr.length - 1; i++) {
    const pointsA = arr[i];
    for (let j = i + 1; j <= arr.length - 1; j++) {
      const pointsB = arr[j]

      const distanceVal = distance(pointsA, pointsB);

      totalDistance += distanceVal;
      if (distanceVal < closest.distance) {
        closest.distance = distanceVal;
        closest.points = [[pointsA[0], pointsA[1]], [pointsB[0], pointsB[1]]]
      }
      
      if (distanceVal > furthest.distance) {
        furthest.distance = distanceVal;
        furthest.points = [[pointsA[0], pointsA[1]], [pointsB[0], pointsB[1]]]
      }
    }
  }

  return {
    closest,
    furthest,
    average: totalDistance / ((arr.length * (arr.length - 1)) / 2),
  };
};