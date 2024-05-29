const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.unshift(6);
arr.push(0);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// arr3 = [...arr1, ...arr2];

// arr3 = arr1.concat(arr2.slice(1));

arr1.pop();
arr3 = arr1.concat(arr2);
console.log(arr3);
