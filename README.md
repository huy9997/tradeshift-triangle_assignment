In the project directory, you can run:

### `npm install`

install the dependencies for the project

### `npm start`

run the project

Design

### Key points

- used a react-express template I built and removed the things I did not need. (https://github.com/huy9997/React-Express-Template)
- seperated as much html code in components as I can (example: broke up tradeshift ui html components)
- keep in mind modularity and scalability to add features in the future and error testing
- made a display of the triangle by passing in the input values to a css styled component to create a custom triangle

### Error checking can be found in helper function

- make sure input is a number greater than 0
- make sure input only contains numbers
- make sure to remove zeros in front of first significant digit
- make sure the value is less than 700 px to prevent too large of a triangle

### Check triangles

- check values of Equalateral triangle by seeing if they are all equal
- check values of Isosceles triangle by seeing if two sides are equal
- check Scalene if it is valid input and not a Isosceles and Equalateral
