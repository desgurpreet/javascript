function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new person("John", "Doe", "2-3-1986");
const person2 = new person("Mary", "Smith", "2-3-1986");

console.log(person1.getBirthYear());
console.log(person1.getFullName());
