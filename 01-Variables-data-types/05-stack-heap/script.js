const name = 'John';
const age = 30;

const person = {
  name: 'Rick',
  age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'jingyuan';

console.log(name, newName);
console.log(person, newPerson);
