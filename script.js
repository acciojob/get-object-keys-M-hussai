//your JS code here. If required.
// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(student);
}

// Testing the function
console.log(getKeys(obj)); // Output: ["name"]