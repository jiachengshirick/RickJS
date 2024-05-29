console.log(new Date());

console.log('Hello World ');

console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.log(x);

console.error('Alert');
 
console.error('Alert');

console.warn("Warning");

console.table({ name: 'Rick', email: 'rick@gmail.com' });


console.group('simple');
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

console.group('simple');
console.error("Alert2");
console.warn("Warning1");
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log("%cHello World", styles);

