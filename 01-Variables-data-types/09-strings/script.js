let x;
const name = 'rick';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

x = s[1];

x = s.__proto__;

x = s.toLowerCase();
x = s.toUpperCase();

x = s.charAt(0);

x = s.indexOf('l');

x = s.substring(2, 5);
x = s.substring(7);
x = s.substring(0, 5);

x = s.slice(-11, -6);

x = '           Hello World';

x = x.trim();

x = s.replace('World', 'Rick');

x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

console.log(x);
