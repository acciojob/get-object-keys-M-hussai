// 1. Add the getKeys function directly to the global Object prototype
Object.prototype.getKeys = function() {
  // 'this' refers to the specific object calling the method
  return Object.keys(this);
};

// 2. Create the student object (as requested by your comments)
const student = {
  name: "John",
};

// Now any object can call .getKeys() directly!
console.log(student.getKeys()); // Output: ["name"]