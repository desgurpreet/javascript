//prototype in object orient
let a = {
  name: "preet",
  language: "javascript",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};
p.__proto__ = {
  name2: "jackie",
};
a.__proto__ = p;
a.run();
console.log(a.name2);

// class and object

class form {
  submit() {
    alert(this.name + "your form is successfully submitted");
  }
  cancel() {
    alert(this.name + " form is cancelled");
  }
  fill(givenname) {
    this.name = givenname;
  }
}

let gurpreet = new form();
gurpreet.fill("Gurpreet Singh");
let hardeep = new form();
hardeep.fill("Hardeep Singh");

gurpreet.submit();
hardeep.cancel();

// constructor
class railwayForm {
  constructor(givenname, trainno, address) {
    this.name = givenname;
    this.trainno = trainno;
    this.address = address;
  }
  preview() {
    alert(
      this.name +
        " your form is successfully submitted " +
        "train number is : " +
        this.trainno +
        " your address :" +
        this.address
    );
  }
  submit() {
    alert(
      this.name +
        " your form is successfully submitted " +
        "train number is : " +
        this.trainno +
        " your address :" +
        this.address
    );
  }
  cancel() {
    alert(
      this.name +
        " form is cancelled" +
        "train number is : " +
        this.trainno +
        "Address : " +
        this.address
    );
    this.trainno = 0;
  }
}
let preet = new railwayForm("gurpreet", 23432, "234,amar nagar,amritsar");
preet.submit();
preet.cancel();
preet.preview();
