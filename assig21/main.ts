// Exercise 21: TypeScript Objects
let myObject: {[key: string]: string} = {
    
    country: "Pakistan",
    city: "Karachi",
    language: "Urdu"
};

console.log("My objects:");
for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}
