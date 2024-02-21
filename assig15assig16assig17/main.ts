// Exercise 15: Changing Guest List
let guests: string[] = ["Sharib", "Sharjeel", "Taha"];
let unableToAttend: string | undefined = guests.pop(); 
if (unableToAttend !== undefined) {
    console.log(`${unableToAttend} can't make it to dinner.`);
}

guests.push("Arham");

for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
// Exercise 16: More Guests
console.log("Good news! We found a bigger dinner table.");

guests.unshift("shahwaiz"); // Add one new guest to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Hamza"); // Add one new guest to the middle
guests.push("Nasir"); // Use append() to add one new guest to the end

for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
// Exercise 17: Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

guests.splice(0); // Remove the last two names from the list
console.log(guests); // Print the empty list to verify
