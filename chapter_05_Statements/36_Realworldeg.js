let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin has all access");
    } else if (userRole === "editor") {
        console.log("Edit access granted");
    } else if (userRole === "viewer") {
        console.log("Read only access granted");
    } else {
        console.log("Kindly specify your role");
    }
} else {
    console.log("You are not logged In");
}