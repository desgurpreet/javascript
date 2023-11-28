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
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text); //get values of text from all objects
}
for (let todo of todos) {
  console.log(todo.id);
}

//foreach
todos.forEach(function (todo) {
  console.log(todo.isCompleted);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

const todoComplete = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoComplete);
