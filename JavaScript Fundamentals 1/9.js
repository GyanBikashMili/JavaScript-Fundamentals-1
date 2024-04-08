const arr = [1, 2, 99, "PW", 1234, "SKILLS"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    console.log("Found the First String:", arr[i]);

    break;
  }
}
