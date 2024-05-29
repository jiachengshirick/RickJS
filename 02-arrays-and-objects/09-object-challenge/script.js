const library = [
  {
    title: 'Sherlock',
    author: 'Conan',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Princess',
    author: 'Who',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'RIck',
    author: 'Shi',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const jsonS = JSON.stringify(library);

console.log(jsonS);
