// Exercise 32: Checking Usernames
let current_users: string[] = ["Sharib", "Ateeq", "Sharjeel", "Serwer", "taha"];
let new_users: string[] = ["mehboob", "nasir", "jameel", "admin", "arham"];

for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}
