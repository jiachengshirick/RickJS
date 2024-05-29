const getCelsius = (f) => Math.round(((F - 32) * 5) / 9);
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

const minMax = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

(function (length, width) {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }.`
  );
})(10, 5);
