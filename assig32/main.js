// Exercise 32: Checking Usernames
var current_users = ["Sharib", "Ateeq", "Sharjeel", "Serwer", "taha"];
var new_users = ["mehboob", "nasir", "jameel", "admin", "arham"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(new_user.toLowerCase())) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
}
