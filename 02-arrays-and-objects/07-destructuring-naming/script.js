let x;
// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

x = person.age;

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = numbers;

console.log(a, b, rest);
