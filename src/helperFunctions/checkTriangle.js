let checkTriangle = (left, right, bottom) => {
  //equilateral, isosceles or scalene.
  if (!left > 0 && !right > 0 && !bottom > 0) {
    return ["error", " error please enter all values greater than 0 "];
  }
  if (left === right && right === bottom) {
    return "equalateral";
  }
  if (left === right || right === bottom || bottom === left) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

export default checkTriangle;
