let x;

const numbers = [1, 2, 3, 4, 5, 6];
const mixed = [12, 'Hello', true, null];

const fruits = new Array('apple', 'grape', 'orange');

x = fruits;

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// fruits.length = 2;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x, typeof x);