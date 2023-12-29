const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const secretKey = "123";
// Write a function that takes in a username and password and returns
// a JWT token with the username encoded. Should return null if the username is not a valid email
// or if the password is less than 6 characters. Try using the zod library here
const zod = require("zod");
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign({ username }, secretKey);
  return signature;
}
const ans = signJwt("ur@gmai.com", "rertyui");
console.log(ans);

// Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
// To test, go to the 02-jwt folder and run
function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, secretKey);
  } catch (e) {
    ans = false;
  }
  return ans;
}
const ans1 = verifyJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVyQGdtYWkuY29tIiwiaWF0IjoxNzAzMjI3NjQzfQ.B-MuByA1MqnoSsbzR4xp4dpriMFkTlTJ-nG4t0NtCxs"
);
console.log(ans1);
// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
const ans2 = decodeJwt("hkdkhfsj");
console.log(ans2);