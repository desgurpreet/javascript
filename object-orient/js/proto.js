// //prototype in object orient
// let a = {
//   name: "preet",
//   language: "javascript",
//   run: () => {
//     alert("self run");
//   },
// };
// console.log(a);

// let p = {
//   run: () => {
//     alert("run");
//   },
// };
// p.__proto__ = {
//   name2: "jackie",
// };
// a.__proto__ = p;
// a.run();
// console.log(a.name2);

// // class and object

// class form {
//   submit() {
//     alert(this.name + "your form is successfully submitted");
//   }
//   cancel() {
//     alert(this.name + " form is cancelled");
//   }
//   fill(givenname) {
//     this.name = givenname;
//   }
// }

// let gurpreet = new form();
// gurpreet.fill("Gurpreet Singh");
// let hardeep = new form();
// hardeep.fill("Hardeep Singh");

// gurpreet.submit();
// hardeep.cancel();

// // constructor
// class railwayForm {
//   constructor(givenname, trainno, address) {
//     this.name = givenname;
//     this.trainno = trainno;
//     this.address = address;
//   }
//   preview() {
//     alert(
//       this.name +
//         " your form is successfully submitted " +
//         "train number is : " +
//         this.trainno +
//         " your address :" +
//         this.address
//     );
//   }
//   submit() {
//     alert(
//       this.name +
//         " your form is successfully submitted " +
//         "train number is : " +
//         this.trainno +
//         " your address :" +
//         this.address
//     );
//   }
//   cancel() {
//     alert(
//       this.name +
//         " form is cancelled" +
//         "train number is : " +
//         this.trainno +
//         "Address : " +
//         this.address
//     );
//     this.trainno = 0;
//   }
// }
// let preet = new railwayForm("gurpreet", 23432, "234,amar nagar,amritsar");
// preet.submit();
// preet.cancel();
// preet.preview();

// // extend and inheritance
// class animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   run() {
//     console.log(this.name + "is running");
//   }
//   shout() {
//     console.log(this.name + "is shouting");
//   }
// }
// class monkey extends animal {
//   eatBanana() {
//     console.log(this.name + " is eating banana");
//   }
// }
// let ani = new animal("bruno", "white");
// let m = new monkey("chimpu", "orange");
// ani.run();
// m.eatBanana();

// overridding method
class employee {
  login() {
    console.log(`Employee has logged in`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves`);
  }
}
class programmer extends employee {
  requestCoffee(x) {
    console.log(`Employee has request ${x} coffee`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(4);
    console.log(`${leaves + 1} one extra leave granted`);
  }
}
let e = new programmer();
e.login();
e.requestLeaves(3);

// static method
class bird {
  constructor(name) {
    this.name = bird.capitalize(name);
  }
  fly() {
    alert("Bird " + this.name + " is flying");
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}
let j = new bird("Peacock");
j.fly();

//  getter,setter and instance operator
class my {
  constructor(name1) {
    this._name1 = name1;
  }
  hobby() {
    console.log("watch cartoon");
  }
  get name1() {
    return this_name1;
  }
  set name1(newName) {
    this._name1 = newName;
  }
}
let a = new my("garry");
a.hobby();
console.log(a._name1);
a.name1 = "gagan";
console.log(a._name1);
let c = 34;
console.log(a instanceof my);
console.log(c instanceof my);
