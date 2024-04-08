let name = "Mithun";
let email = "Mithun.s@pw.live";
let age = "21";

if (typeof name !== "string") {
  console.log("Name should be a string.");
}

if (typeof email !== "string") {
  console.log("Email should be a string.");
}

if (typeof parseInt(age) !== "number" || isNaN(parseInt(age))) {
  console.log("Age should be a number.");
}
