// Exercise 24: More Conditional Tests
let string1: string = "hello";
let string2: string = "HELLO";
let number1: number = 10;
let number2: number = 20;
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Tests for equality and inequality with strings:");
console.log(string1 === "hello");
console.log(string1 !== "world");
console.log(string1.toLowerCase() === string2.toLowerCase());

console.log("Tests using numerical comparisons:");
console.log(number1 < number2);
console.log(number1 > number2);
console.log(number1 <= number2);
console.log(number1 >= number2);

console.log("Tests using 'and' and 'or' operators:");
console.log(number1 < number2 && string1 === "hello");
console.log(number1 > number2 || string1 === "hello");

console.log("Test whether an item is in an array:");
console.log(fruits.includes("apple"));
console.log(fruits.includes("grapes"));

console.log("Test whether an item is not in an array:");
console.log(!fruits.includes("kiwi"));
console.log(!fruits.includes("banana"));
