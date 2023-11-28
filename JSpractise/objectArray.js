const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dr. appointment",
    isCompleted: false,
  },
];
console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


