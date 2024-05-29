const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to Json str
const str = JSON.stringify(post);

console.log(str.id);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(obj);
