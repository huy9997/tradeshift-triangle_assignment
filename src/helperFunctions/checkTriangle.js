let checkTriangle = (left, right, bottom) => {
  //equilateral, isosceles or scalene.

  if (left <= 0 || right <= 0 || bottom <= 0) {
    return ["error", "Error please enter all values greater than 0 "];
  }
  if (left > 700 || right > 700 || bottom > 700) {
    return ["error", "Error please make sure values are less than 700"];
  }
  if (left === right && right === bottom) {
    return "Equalateral Triangle";
  } else if (left === right || right === bottom || bottom === left) {
    return "Isosceles Triangle";
  } else {
    return "Scalene Triangle";
  }
};

export default checkTriangle;
