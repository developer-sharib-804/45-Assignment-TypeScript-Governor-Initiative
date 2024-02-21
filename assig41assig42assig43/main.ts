// Exercise 41: Magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Sharib", "Sharjeel", "Taha"];

show_magicians(magicians);






// Exercise 42: Great Magicians
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}


let great_magicians: string[] = make_great(magicians);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("Great Magicians:");
show_magicians(great_magicians);




// Exercise 43: Unchanged Magicians
let new_magicians: string[] = make_great(magicians.slice());

console.log("Original Magicians:");
show_magicians(magicians);

console.log("New Magicians:");
show_magicians(new_magicians);

