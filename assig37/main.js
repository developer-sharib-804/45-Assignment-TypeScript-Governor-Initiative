// Exercise 37: Large Shirts
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
make_shirt(); // Large shirt 
make_shirt("Medium"); // Medium shirt
make_shirt("Small", "Hello, World!"); // Small
