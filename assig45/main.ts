// Exercise 45: Cars
function car_info(manufacturer: string, model: string, ...options: string[]): {[key: string]: string} {
    let car: {[key: string]: string} = {
        Manufacturer: manufacturer,
        Model: model
    };
    for (let option of options) {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    }
    return car;
}

let car1 = car_info("Toyota", "Hilux", "Color: Red", "Sunroof: Yes");
let car2 = car_info("Honda", "Civic", "Color: Blue");
let car3 = car_info("Tesla", "Model S");

console.log(car1);
console.log(car2);
console.log(car3);
