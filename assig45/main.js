// Exercise 45: Cars
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: manufacturer,
        Model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var _b = option.split(":"), key = _b[0], value = _b[1];
        car[key.trim()] = value.trim();
    }
    return car;
}
var car1 = car_info("Toyota", "Hilux", "Color: Red", "Sunroof: Yes");
var car2 = car_info("Honda", "Civic", "Color: Blue");
var car3 = car_info("Tesla", "Model S");
console.log(car1);
console.log(car2);
console.log(car3);
