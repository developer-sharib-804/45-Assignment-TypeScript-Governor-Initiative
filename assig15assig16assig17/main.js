// Exercise 15: Changing Guest List
var guests = ["Sharib", "Sharjeel", "Taha"];
var unableToAttend = guests.pop();
if (unableToAttend !== undefined) {
    console.log("".concat(unableToAttend, " can't make it to dinner."));
}
guests.push("Arham");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
// Exercise 16: More Guests
console.log("Good news! We found a bigger dinner table.");
guests.unshift("shahwaiz"); // Add one new guest to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Hamza"); // Add one new guest to the middle
guests.push("Nasir"); // Use append() to add one new guest to the end
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
// Exercise 17: Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guests.splice(0); // Remove the last two names from the list
console.log(guests); // Print the empty list to verify
