// Exercise 18: Seeing the World
var placesToVisit = ["Pakistan", "India", "Australia", "Canada", "Afganistan"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("Alphabetical Order:");
console.log(placesToVisit.slice().sort());
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("Reversed Order:");
console.log(placesToVisit.reverse());
console.log("Original Order (one last time):");
console.log(placesToVisit.reverse());
console.log("Sorted in Alphabetical Order:");
console.log(placesToVisit.sort());
console.log("Sorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());
