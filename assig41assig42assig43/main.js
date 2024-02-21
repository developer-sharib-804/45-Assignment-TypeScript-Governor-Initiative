// Exercise 41: Magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Sharib", "Sharjeel", "Taha"];
show_magicians(magicians);
// Exercise 42: Great Magicians
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
var great_magicians = make_great(magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(great_magicians);
// Exercise 43: Unchanged Magicians
var new_magicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("New Magicians:");
show_magicians(new_magicians);
