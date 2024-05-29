let x;

const person = {
  name: 'Rick Shi',
  age: 28,
  isAdmin: true,
  address: {
    street: '123 Main St.',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;

x = person['age'];

x = person.address.state;

x = person.hobbies[0];

person.name = 'Jingyuan';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, this is ${this.name}`);
};

person.greet();

const person2 = {
  'f n': 'rick',
  'l n': 'Shi',
};

x = person2['f n'];

console.log(x, typeof x);
