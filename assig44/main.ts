// Exercise 44: Sandwiches
function make_sandwich(...toppings: string[]): void {
    console.log("Sandwich Summary:");
    for (let topping of toppings) {
        console.log(`- ${topping}`);
    }
}

make_sandwich("mayo", "Lettuce", "Tomato");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana");
