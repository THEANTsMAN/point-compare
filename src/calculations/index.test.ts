import { calculatedPoints } from "./index";

test("should take a known input and return the expected result", () => {
  const testCase = [[0, 1.234], [3, 8], [4, 3], [10, 13]];

  const result = calculatedPoints(testCase);

  expect(result).toEqual({
    closest: {
      distance: 4.3724999714122355,
      points: [[0.0, 1.234], [4.0, 3.0]],
    },
    furthest: {
      distance: 15.441462236459344,
      points: [[0.0, 1.234], [10.0, 13.0]],
    },
    average: 8.76307966116618,
  })
});

test("should take a known input of two points and return the expected result", () => {
  const testCase = [[1, 2], [3, 4]];

  const result = calculatedPoints(testCase);

  expect(result).toEqual({
    closest: {
      distance: 2.8284271247461903,
      points: [[1, 2], [3, 4]],
    },
    furthest: {
      distance: 2.8284271247461903,
      points: [[1, 2], [3, 4]],
    },
    average: 2.8284271247461903,
  });
});