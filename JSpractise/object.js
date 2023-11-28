const person = {
  firstName: "john",
  lastName: "smith",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "120 main st",
    city: "Boston",
    state: "MS",
  },
};
person.email = "john@gmail.com"; //add variable
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
