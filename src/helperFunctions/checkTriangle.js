let removeZeros = string => {
  return string.replace(/^0+/, "");
};

let checkTriangle = (left, right, bottom) => {
  left = removeZeros(left);
  right = removeZeros(right);
  bottom = removeZeros(bottom);

  if (left <= 0 || right <= 0 || bottom <= 0) {
    return ["error", "Error please enter all values greater than 0 "];
  }
  if (left > 700 || right > 700 || bottom > 700) {
    return [
      "error",
      "The Triangle area maxes out at 700px please enter values less than 700"
    ];
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
