// Exercise 21: TypeScript Objects
var myObject = {
    country: "Pakistan",
    city: "Karachi",
    language: "Urdu"
};
console.log("My objects:");
for (var key in myObject) {
    console.log("".concat(key, ": ").concat(myObject[key]));
}
