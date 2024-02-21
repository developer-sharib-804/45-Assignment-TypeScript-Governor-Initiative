// Exercise 37: Large Shirts
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt(); // Large shirt 
make_shirt("Medium"); // Medium shirt
make_shirt("Small", "Hello, World!"); // Small
