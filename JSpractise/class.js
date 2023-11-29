class person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new person("John", "Doe", "2-3-1986");
const person2 = new person("Mary", "Smith", "2-3-1986");

console.log(person1.getBirthYear());
console.log(person1.getFullName());
