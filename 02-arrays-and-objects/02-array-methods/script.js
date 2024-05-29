let x;
const arr = [1, 2, 3, 4, 5];

// arr.push(100);
// arr.pop();
// arr.unshift(99);
// arr.shift();
// arr.reverse();

x = arr.includes(5);

x = arr.indexOf(5);

x = arr.slice(0, 3);

// x = arr.splice(0, 3);
// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);
